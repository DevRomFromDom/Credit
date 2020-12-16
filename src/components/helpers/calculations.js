export const getCreditBody = (price, firstPay) => {
    return price - firstPay;
};
export const getMonthPayment = (percent, years, creditBody) => {
    const a = percent / 1200;
    const b = (1 + a) ** (years * 12);
    return creditBody * (a + a / (b - 1));
};
export const getSalary = (monthPayment) => {
    return 5 * (monthPayment / 3);
};

export const getOverPay = (monthPayment, years, price, firstPay) => {
    return monthPayment * years * 12 - price + firstPay;
};
