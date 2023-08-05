const apiKey = process.env.NEXT_PUBLIC_OPEN_EXCHANGE_RATES_API_KEY;

export const fetchRates = async (symbol: string) => {
  const res = await fetch(
    `https://openexchangerates.org/api/latest.json?app_id=${apiKey}&symbols=${symbol}`
  );
  const data = await res.json();
  return data.rates[symbol];
};

export const fetchCurrencies = async () => {
  const res = await fetch(`https://openexchangerates.org/api/currencies.json`);
  const currencies = await res.json();
  return Object.keys(currencies);
};
