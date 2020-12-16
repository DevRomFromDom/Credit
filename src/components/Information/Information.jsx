import React from "react";
import styles from "./Information.module.scss";
import {
    getCreditBody,
    getMonthPayment,
    getSalary,
    getOverPay,
} from "../helpers/calculations";
import { addSpaces } from "../helpers/addSpaces";

const Item = ({ value, title }) => {
    const processEdgeConditions = (value) => {
        return isNaN(value) ||
            value === Infinity ||
            value === -Infinity ||
            value < 0
            ? 0
            : value;
    };
    return (
        <div className={styles.info_cart}>
            <label className={styles.info_cart_lable}>{title}</label>
            {addSpaces(processEdgeConditions(value).toFixed(2))} &#8381;
        </div>
    );
};

const Information = ({ price, firstPay, years, percent }) => {
    const creditBody = getCreditBody(price, firstPay);
    const monthPayment = getMonthPayment(percent, years, creditBody);
    const salary = getSalary(monthPayment);
    const overPay = getOverPay(monthPayment, years, price, firstPay);

    return (
        <div className={styles.main}>
            <div className={styles.info}>
                <div className={styles.info_payment}>
                    <Item value={monthPayment} title={"Ежемесячный платеж"} />
                    <Item value={salary} title={"Необходимый доход"} />
                </div>
                <div className={styles.info_credit}>
                    <Item value={overPay} title={"Переплата"} />
                    <Item value={creditBody} title={"Тело кредита"} />
                </div>
            </div>
        </div>
    );
};

export default Information;
