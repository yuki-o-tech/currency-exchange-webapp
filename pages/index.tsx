import { GetServerSideProps } from "next";
import React, { useState, useEffect } from "react";
import BaseScreen from "../src/components/BaseScreen";
import { fetchCurrencies, fetchRates } from "../src/api/currency";

interface CurrencyRateProps {
  initialRate: number;
  availableCurrencies: string[];
}

export const getServerSideProps: GetServerSideProps<
  CurrencyRateProps
> = async () => {
  const initialRate = await fetchRates("JPY");
  const availableCurrencies = await fetchCurrencies();

  return {
    props: {
      initialRate,
      availableCurrencies,
    },
  };
};

const CurrencyRate = ({
  initialRate,
  availableCurrencies,
}: CurrencyRateProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState("JPY");
  const [rate, setRate] = useState(initialRate);

  useEffect(() => {
    const fetchRate = async () => {
      const newRate = await fetchRates(selectedCurrency);
      setRate(newRate);
    };

    fetchRate();
  }, [selectedCurrency]);

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <BaseScreen
      handleCurrencyToChange={handleCurrencyChange}
      availableCurrencies={availableCurrencies}
      rate={rate}
      selectedCurrencyTo={selectedCurrency}
    />
  );
};

export default CurrencyRate;
