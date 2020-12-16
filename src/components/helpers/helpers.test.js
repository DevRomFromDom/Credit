import { addSpaces } from "./addSpaces";
import { removeSpaces } from "./removeSpaces";
import {
    getCreditBody,
    getMonthPayment,
    getSalary,
    getOverPay,
} from "./calculations";

describe("calculations", () => {
    test.each([
        [1000, 700, 300],
        [500, 400, 100],
        [-500, -200, -300],
    ])(
        "getCreditBody: for %i and %i should return credit %i",
        (a, b, expected) => {
            expect(getCreditBody(a, b)).toBe(expected);
        }
    );

    test("getMonthPayment should return monthPayment(Number)", () => {
        expect(getMonthPayment(10, 12, 10000)).toBe(119.5078262827336);
    });

    test("getSalary should return salary(Number)", () => {
        expect(getSalary(120)).toBe(200);
    });

    test("getOverPay should return overPay(Number)", () => {
        expect(getOverPay(10755, 12, 1000000, 100000)).toBe(648720);
    });
});

describe("Add and remove spaces", () => {
    test("Add spaces to number or string", () => {
        expect(addSpaces("1000000")).toBe("1 000 000");
        expect(addSpaces(1000000)).toBe("1 000 000");
        expect(addSpaces("1 000 000")).toBe("1 000 000");
    });

    test("Remove spaces from string with spaces or numbers", () => {
        expect(removeSpaces("1 000 000")).toBe("1000000");
        expect(removeSpaces("100")).toBe("100");
        expect(removeSpaces("1000000")).toBe("1000000");
        expect(removeSpaces(1000000)).toBe("1000000");
    });
});
