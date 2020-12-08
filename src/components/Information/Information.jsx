import React from "react";
import styles from "./Information.module.scss";
import { salaryF, monthPaymentF, overPayF, creditBodyF } from "./Functions";
import { addSpaces } from "../Spaces/AddSpaces";

const Information = ({ price, firstPay, years, percent }) => {
    const creditBody = creditBodyF(price, firstPay);
    const monthPayment = monthPaymentF(percent, years, creditBody);
    const salary = salaryF(monthPayment);
    const overPay = overPayF(monthPayment, years, price, firstPay);

    return (
        <div className={styles.main}>
            <div className={styles.info}>
                <div className={styles.info_payment}>
                    <div className={styles.info_cart}>
                        <label className={styles.info_cart_lable}>
                            Ежемесячный платеж
                        </label>
                        {isNaN(monthPayment) ||
                        monthPayment === Infinity ||
                        monthPayment === -Infinity || monthPayment <0
                            ? 0
                            : addSpaces(monthPayment.toFixed(2))}{" "}
                        &#8381;
                    </div>
                    <div className={styles.info_cart}>
                        <label className={styles.info_cart_lable}>
                            Необходимый доход
                        </label>
                        {isNaN(salary) ||
                        salary === Infinity ||
                        salary === -Infinity || salary < 0
                            ? 0
                            : addSpaces(salary.toFixed(2))}{" "}
                        &#8381;
                    </div>
                </div>
                <div className={styles.info_credit}>
                    <div className={styles.info_cart}>
                        <label className={styles.info_cart_lable}>
                            Переплата
                        </label>
                        {isNaN(overPay) || overPay <0 ? 0 : addSpaces(overPay.toFixed(0))}{" "}
                        &#8381;
                    </div>
                    <div className={styles.info_cart}>
                        <label className={styles.info_cart_lable}>
                            Тело кредита
                        </label>
                        {isNaN(creditBody) || creditBody === 0 || creditBody <0 
                            ? 0
                            : addSpaces(creditBody)}{" "}
                        &#8381;
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;
