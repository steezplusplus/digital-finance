export const formatCurrency = (amount: number, currency: string) => {
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });

  return currencyFormatter.format(amount);
};
