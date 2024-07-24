import React from "react";

function InputBox({
  label,
  amount,
  onCurrencyChange,
  onAmountChange,
  defaultCurrency = "usd",
  currencyList = [],
  amountDisabled = false,
  currencyDisable = false,
}) {
  return (
    <div className="font-sans text-sm w-full flex justify-between bg-[#fad39c] px-4 py-3 rounded-md text-black">
      <div className="flex flex-col text-left gap-y-4 ">
        <label htmlFor="input">{label}</label>
        <input
          type="number"
          className="p-x-2 outline-none text-black bg-[#fad39c]"
          placeholder="0"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="flex flex-col text-left gap-y-4 ">
        <label htmlFor="input">Currency type</label>
        <select
          name="currency"
          id=""
          className="bg-gray-200 rounded p-1 outline-none text-black"
          value={defaultCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyList.map((currency) => (
            <option value={currency} key={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
