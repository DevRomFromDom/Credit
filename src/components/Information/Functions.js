export const creditBodyF = (price, firstPay) => {
    return price - firstPay;
};
export const monthPaymentF = (percent, years, creditBody) => {
    const a = percent/1200;
    const b = (1+a)**(years*12)
    return creditBody * (a + a / (b - 1));
};
export const salaryF = (monthPayment) => {
    return 5 * (monthPayment / 3);
};

export const overPayF = (monthPayment, years, price, firstPay) => {
    return monthPayment * years * 12 - price + firstPay;
};
