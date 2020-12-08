import React, { useEffect, useRef, useState } from "react";
import styles from "./Credit.module.scss";
import Information from "../Information/Information";
import { Input } from "@skbkontur/react-ui";
import { addSpaces } from "../Spaces/AddSpaces";
import PercentButton from "./PercentButtons/PercentButton";
import { removeSpaces } from "../Spaces/RemoveSpaces";
import { validate } from "./validations";
import {
    ValidationContainer,
    ValidationWrapper,
} from "@skbkontur/react-ui-validations";

const Credit = () => {
    const [inputFocus, setInputFocus] = useState(0);
    const memo = JSON.parse(localStorage.getItem("item"));
    const firstPayPercents = [10, 15, 20, 25, 30];
    const [firstPayPercent, setFirstPayPercent] = useState(() => {
        let initialState = 0;
        if (memo !== null) {
            initialState = +memo.firstPayPercent;
        }
        return initialState;
    });
    const [price, setPrice] = useState(() => {
        let initialState = "";
        if (memo !== null) {
            initialState = memo.price;
        }
        return initialState;
    });
    const [firstPay, setFirstPay] = useState(() => {
        let initialState = "";
        if (memo !== null) {
            initialState = memo.firstPay;
        }
        return initialState;
    });
    const [years, setYears] = useState(() => {
        let initialState = "";
        if (memo !== null) {
            initialState = memo.years;
        }
        return initialState;
    });
    const [percent, setPercent] = useState(() => {
        let initialState = "";
        if (memo !== null) {
            initialState = memo.percent;
        }
        return initialState;
    });

    useEffect(() => {
        if (price !== "" && inputFocus === 0) {
            const newFirstPay = Math.round(
                (+removeSpaces(price) / 100) * firstPayPercent
            );
            setFirstPay(addSpaces(newFirstPay));
        }
        if (firstPay !== "" && inputFocus === 1) {
            const newPrice = Math.round(
                (+removeSpaces(firstPay) / firstPayPercent) * 100
            );
            setPrice(addSpaces(newPrice));
        }
        if (price === "" && +removeSpaces(firstPay) === 1) {
            setFirstPay("");
        }
        if (firstPay === "" && inputFocus === 1) {
            setPrice("");
        }
    }, [firstPayPercent, price, firstPay, inputFocus]);

    const saveItem = {
        price: price.toString(),
        firstPay: firstPay.toString(),
        years: years.toString(),
        percent: percent.toString(),
        firstPayPercent: `${firstPayPercent}`.toString(),
    };

    const changeFirstPayPercent = (e) => {
        setFirstPayPercent(+e.target.value);
    };

    const save = async () => {
        if (!(await validationContainerRef.current?.validate())) {
            return;
        }
        localStorage.setItem("item", JSON.stringify(saveItem));
    };

    const clear = (e) => {
        setPrice("");
        setYears("");
        setFirstPay("");
        setPercent("");
        localStorage.clear();
        e.preventDefault();
    };

    const inputPrice = useRef();
    const inputFirstPay = useRef();

    const priceFocus = async () => {
        await inputPrice.current.blur();
        await inputPrice.current.focus();
    };

    const firstPayFocus = async () => {
        await inputFirstPay.current.blur();
        await inputFirstPay.current.focus();
    };

    const formatChars = {
        9: "[0-9 ]",
    };
    const validationContainerRef = useRef(null);

    const validation = validate({ price, firstPay, years, percent });

    return (
        <div className={styles.main}>
            <ValidationContainer ref={validationContainerRef}>
                <div className={styles.form}>
                    <div className={styles.input}>
                        <label>Стоимость недвижимости</label>
                        <ValidationWrapper
                            validationInfo={validation
                                .getNode((x) => x.price)
                                .get()}
                        >
                            <Input
                                autoFocus={true}
                                ref={inputPrice}
                                rightIcon="&#8381;"
                                type="text"
                                size="small"
                                mask="99999999999"
                                onChange={(e) => {
                                    setPrice(addSpaces(e.target.value));
                                    priceFocus();
                                    setInputFocus(0);
                                }}
                                value={price}
                                maskChar=" "
                                formatChars={formatChars}
                                onFocus={(e) =>
                                    e.target.setSelectionRange(
                                        e.target.value.length,
                                        e.target.value.length
                                    )
                                }
                            />
                        </ValidationWrapper>
                    </div>
                    <div className={styles.input}>
                        <label>Первоначальный взнос</label>
                        <ValidationWrapper
                            validationInfo={validation
                                .getNode((x) => x.firstPay)
                                .get()}
                        >
                            <Input
                                ref={inputFirstPay}
                                rightIcon="&#8381;"
                                type="text"
                                size="small"
                                mask="9999999999"
                                onChange={(e) => {
                                    setFirstPay(addSpaces(e.target.value));
                                    firstPayFocus();
                                    setInputFocus(1);
                                }}
                                value={firstPay}
                                maskChar=" "
                                formatChars={formatChars}
                                onFocus={(e) =>
                                    e.target.setSelectionRange(
                                        e.target.value.length,
                                        e.target.value.length
                                    )
                                }
                            />
                        </ValidationWrapper>
                    </div>
                    <div className={styles.first_pay_percent}>
                        <PercentButton
                            firstPayPercents={firstPayPercents}
                            firstPayPercent={firstPayPercent}
                            changeFirstPayPercent={changeFirstPayPercent}
                        />
                    </div>
                    <div className={styles.input}>
                        <label>Срок кредита</label>
                        <Input
                            value={years}
                            onValueChange={setYears}
                            mask="99"
                            maskChar=" "
                            rightIcon={"ЛЕТ"}
                        />
                    </div>
                    <div className={styles.input}>
                        <label>Процентная ставка</label>
                        <Input
                            value={percent}
                            onValueChange={setPercent}
                            rightIcon={"%"}
                            mask="99"
                            maskChar=" "
                        />
                    </div>
                    <div className={styles.submit}>
                        <button onClick={save}>Save</button>
                        <button onClick={(e) => clear(e)}>Clear</button>
                    </div>
                </div>
            </ValidationContainer>
            <Information
                price={+removeSpaces(price)}
                firstPay={+removeSpaces(firstPay)}
                years={+removeSpaces(years)}
                percent={+removeSpaces(percent)}
            />
        </div>
    );
};

export default Credit;
