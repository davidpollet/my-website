const IntCurrency = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const floatCurrency = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
});

export const toCurrency = (amount: number) =>
  Number.isInteger(amount) ? IntCurrency.format(amount) : floatCurrency.format(amount);
