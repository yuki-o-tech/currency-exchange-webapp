import React from "react";

interface BaseScreenProps {
  availableCurrencies: string[];
  rate: number;
  selectedCurrencyTo: string;
  handleCurrencyToChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  //   selectedCurrencyFrom: string;
  //   handleCurrencyFromChange: (
  //     event: React.ChangeEvent<HTMLSelectElement>
  //   ) => void;
  //   handleAmountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const BaseScreen = ({
  availableCurrencies,
  rate,
  selectedCurrencyTo,
  handleCurrencyToChange,
}: //   selectedCurrencyFrom,
//   handleCurrencyFromChange,
//   handleAmountChange,
BaseScreenProps) => {
  return (
    <div>
      <h1>Currency Exchanger</h1>
      <label>
        From:USD
        {/* Warning: The API currently in use is a free plan and base currency cannot be changed */}
        {/* <select
          value={selectedCurrencyFrom}
          onChange={handleCurrencyFromChange}
        >
          {availableCurrencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select> */}
      </label>
      <br />
      {/* <label>
        Amount:
        <input type="number" value={amount} onChange={handleAmountChange} />
      </label> */}
      <label>
        To:
        <select value={selectedCurrencyTo} onChange={handleCurrencyToChange}>
          {availableCurrencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </label>
      <p>
        {rate} {selectedCurrencyTo}
      </p>
    </div>
  );
};

export default BaseScreen;
