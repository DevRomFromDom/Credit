import { createValidator } from "@skbkontur/react-ui-validations";
import { removeSpaces } from "../Spaces/RemoveSpaces";

export const validate = createValidator((builder) => {
    const f= +removeSpaces(builder.data.price);
    builder.prop( 
        (x) => x.price,
        (builder) => {
            builder.invalid(
                (price) => !price,
                "Название товара должно быть указано",
                "submit"
            );
        }
    );
    builder.prop(
        (x) => x.firstPay,
        (builder) => {
            builder.invalid(
                (firstPay) => !firstPay,
                "Название товара должно быть указано",
                "submit"
            );
        }
    );
    builder.prop(
        (x)=>x.firstPay,
        (builder) =>{
            builder.invalid(
                (firstPay) => +removeSpaces(firstPay) > f,
                "Первоначальный взнос не может быть больше стоимости недвижимости",
                "submit"
            );
        }
    )
});
