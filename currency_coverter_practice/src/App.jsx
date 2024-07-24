import React, { useCallback, useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmout, setConvertedAmout] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  // swaping the value
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmout);
    setConvertedAmout(amount);
  };

  // converting amout
  const convert = () => {
    const convertedAmout = (amount * currencyInfo[to]).toFixed(2);
    setConvertedAmout(convertedAmout);
  };

  return (
    <div className=" w-full h-screen flex justify-center text-center items-center flex-wrap overflow-hidden">
      <h1 className="w-full px-2 font-extrabold text-3xl text-slate-600 -mb-4">
        Currency <span className="text-[#aa6f1d]">$</span> Converter
      </h1>
      <div className="w-full px-2 flex justify-between mx-6">
        {/* left side  */}
        <div className="flex flex-col justify-center p-3 w-full max-w-lg mx-auto rounded-lg border border-gray-60 bg backdrop-blur-sm  overflow-hidden bg-[#f0e1c8]">
          <h2 className="text-left text-xl font-thin text-slate-600">
            Convert your favorite curreny in any other currency of the world.
          </h2>
          <form
            className="mt-8 "
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* inputBox start here */}
            <InputBox
              label="From"
              amount={amount}
              defaultCurrency={from}
              currencyList={options}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencyChange={(currency) => setFrom(currency)}
            />
            {/* // swap button */}
            <div className="relative w-full flex justify-center mb-3 ">
              <button
                onClick={swap}
                className="hover:bg-[#aa6f1d] ease-in-out duration-200 absolute bg-[#c07e23] px-3 py-1 rounded-lg text-white font-semibold border-2 border-white -top-3 "
              >
                swap
              </button>
            </div>
            {/* InputBox for output */}
            <InputBox
              label="To"
              amount={convertedAmout}
              defaultCurrency={to}
              currencyList={options}
              onAmountChange={(amount) => convertedAmout(amount)}
              onCurrencyChange={(currency) => setTo(currency)}
              amountDisabled
            />

            <button
              type="submit"
              className="hover:hover:bg-[#aa6f1d] ease-in-out duration-200 w-full bg-[#c07e23] mt-3 py-2 rounded-lg text-white font-semibold border-2 border-white  "
            >
              {`Conver ${from.toUpperCase()} to ${to.toUpperCase()}`}
            </button>
          </form>
        </div>

        {/* Right side  */}
        <div className="mx-8">
          <img src="../public/img/currency_img.png" width={"550px"} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
