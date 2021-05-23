import React, { useEffect, useRef, useState } from "react";
import styles from "./Credit.module.scss";
import Information from "../Information/Information";
import { Button, Input } from "@skbkontur/react-ui";
import { addSpaces } from "../helpers/addSpaces";
import PercentButtons from "./PercentButtons/PercentButtons";
import { removeSpaces } from "../helpers/removeSpaces";
import { validate } from "../helpers/validations";
import {
    ValidationContainer,
    ValidationWrapper,
} from "@skbkontur/react-ui-validations";

const formatChars = {
    9: "[0-9 ]",
};

const getCreditInfo = () => {
    const {
        price = "",
        firstPay = "",
        years = "",
        percent = "",
        firstPayPercent = 0,
    } = JSON.parse(localStorage.getItem("creditInfo")) ?? {};
    return { price, firstPay, years, percent, firstPayPercent };
};

const Credit = () => {
    const [inputFocus, setInputFocus] = useState(0);
    const memo = getCreditInfo();
    const firstPayPercents = [10, 15, 20, 25, 30];
    const [price, setPrice] = useState(memo.price);
    const [firstPayPercent, setFirstPayPercent] = useState(
        memo.firstPayPercent
    );
    const [firstPay, setFirstPay] = useState(memo.firstPay);
    const [years, setYears] = useState(memo.years);
    const [percent, setPercent] = useState(memo.percent);

    useEffect(() => {
        // if (
        //     firstPay !== "" &&
        //     inputFocus === 1 &&
        //     firstPayPercent !== 0 &&
        //     firstPayPercent !== "0"
        // ) {
        //     const newPrice = Math.round(
        //         (+removeSpaces(firstPay) / firstPayPercent) * 100
        //     );
        //     setPrice(addSpaces(newPrice));
        // }
        if (
            price === "" &&
            +removeSpaces(firstPay) === 1 &&
            firstPayPercent !== 0
        ) {
            setFirstPay("");
        }
    }, [firstPayPercent, price, firstPay, inputFocus]);

    useEffect(() => {
        if (
            price !== "" &&
            +firstPayPercent !== 0
            
        ) {
            const newFirstPay = Math.round(
                (+removeSpaces(price) / 100) * firstPayPercent
            );
            setFirstPay(addSpaces(newFirstPay));
        }
    }, [firstPayPercent,price]);

    const saveCreditInfo = {
        price: price.toString(),
        firstPay: firstPay.toString(),
        years: years.toString(),
        percent: percent.toString(),
        firstPayPercent: firstPayPercent.toString(),
    };

    const changeFirstPayPercent = (e) => {
        const newPercent = +e.target.value;
        setFirstPayPercent(firstPayPercent === newPercent ? 0 : newPercent);
    };

    const save = async () => {
        if (!(await validationContainerRef.current?.validate())) {
            return;
        }
        localStorage.setItem("creditInfo", JSON.stringify(saveCreditInfo));
    };

    const clear = () => {
        setPrice("");
        setYears("");
        setFirstPay("");
        setPercent("");
        setFirstPayPercent(0);
        localStorage.clear();
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

    const handleChangePrice = (e) => {
        setInputFocus(0);
        if (+removeSpaces(e.target.value) > +removeSpaces(price)) {
            priceFocus();
        }
        setPrice(addSpaces(e.target.value));
    };

    const handleChangeFirstPay = (e) => {
        setInputFocus(1);
        if (+removeSpaces(e.target.value) > +removeSpaces(firstPay)) {
            firstPayFocus();
        }
        setFirstPay(addSpaces(e.target.value));
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
                                rightIcon='&#8381;'
                                type='text'
                                size='small'
                                mask='99999999999'
                                onChange={(e) => handleChangePrice(e)}
                                value={price}
                                maskChar=' '
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
                                rightIcon='&#8381;'
                                type='text'
                                size='small'
                                mask='9999999999'
                                onChange={(e) => handleChangeFirstPay(e)}
                                value={firstPay}
                                maskChar=' '
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
                        <PercentButtons
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
                            mask='99'
                            maskChar=' '
                            rightIcon={"ЛЕТ"}
                        />
                    </div>
                    <div className={styles.input}>
                        <label>Процентная ставка</label>
                        <Input
                            value={percent}
                            onValueChange={setPercent}
                            rightIcon={"%"}
                            mask='99'
                            maskChar=' '
                        />
                    </div>
                    <div className={styles.submit}>
                        <Button use='success' onClick={save} width='45%'>
                            Save
                        </Button>
                        <Button
                            use='default'
                            onClick={(e) => clear(e)}
                            width='45%'
                        >
                            Clear
                        </Button>
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
