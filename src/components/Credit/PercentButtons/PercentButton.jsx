import styles from "./PercentButton.module.scss";
import React from "react";

const PercentButton = ({
    firstPayPercents,
    firstPayPercent,
    changeFirstPayPercent,
}) => {
    if (firstPayPercents) {
        return firstPayPercents.map((el, i) => {
            return (
                <button
                    key={i}
                    className={el === firstPayPercent? styles.pay_percent_select : styles.pay_percent}
                    value={el}
                    onClick={changeFirstPayPercent}
                >{`${el} %`}</button>
            );
        });
    }
    return <div></div>;
};

export default PercentButton;

