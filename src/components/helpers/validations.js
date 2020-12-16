import { createValidator } from "@skbkontur/react-ui-validations";
import { removeSpaces } from "./removeSpaces";

export const validate = createValidator((builder) => {
    const f = +removeSpaces(builder.data.price);
    builder.prop(
        (x) => x.price,
        (builder) => {
            builder.invalid(
                (price) => !price,
                "Стоимость недвижимости должна быть указана",
                "submit"
            );
        }
    );
    builder.prop(
        (x) => x.firstPay,
        (builder) => {
            builder.invalid(
                (firstPay) => !firstPay,
                "Укажите первоначальный взнос",
                "submit"
            );
        }
    );
    builder.prop(
        (x) => x.firstPay,
        (builder) => {
            builder.invalid(
                (firstPay) => +removeSpaces(firstPay) > f,
                "Первоначальный взнос не может быть больше стоимости недвижимости",
                "lostfocus"
            );
        }
    );
});
