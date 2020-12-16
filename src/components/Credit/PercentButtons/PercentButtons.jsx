import styles from "./PercentButtons.module.scss";
import React from "react";

const PercentButtons = ({
    firstPayPercents,
    firstPayPercent,
    changeFirstPayPercent
}) => {
    if (!firstPayPercents) {
        return null
    } else {
        return firstPayPercents.map((item, itemIndex) => {
            return (
                <button
                    key={itemIndex}
                    className={
                        item === firstPayPercent
                            ? styles.pay_percent_select
                            : styles.pay_percent
                    }
                    value={item}
                    onClick={changeFirstPayPercent}
                >{`${item} %`}</button>
            );
        });
    }
};

export default PercentButtons;

