import { useState } from "react";
import foodPandaLogoUrl from "./assets/food-panda-logo.png";
import bruskoffeeLogoUrl from "./assets/bruskoffee-logo.png";
import "./App.css";

function App() {
  const COMMISSION_RATE = 0.25;
  const TAX_RATE = 0.12;

  const [status, setStatus] = useState("not submitted");
  const [grossPrice, setGrossPrice] = useState("");
  const [commission, setCommission] = useState(0.0);
  const [tax, setTax] = useState(0.0);
  const [total, setTotal] = useState(0.0);

  function handleSubmit(e) {
    e.preventDefault();
    calculate();
    setStatus("submitted");
  }

  function calculate() {
    let commission = grossPrice * COMMISSION_RATE;
    let tax = commission * TAX_RATE;
    let total = grossPrice - (commission + tax);

    setCommission(commission);
    setTax(tax);
    setTotal(total);
  }

  function handleGrossPrice(e) {
    setGrossPrice(e.target.value);
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="mt-16">
        <img src={foodPandaLogoUrl} />
      </div>

      <h1 className="text-2xl">Merchant Partner Calculator</h1>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="mt-8 flex flex-col gap-1">
          <label htmlFor="grossPrice" className="text-xl">
            Enter Item Price:
          </label>
          <input
            type="number"
            id="grossPrice"
            value={grossPrice}
            onChange={handleGrossPrice}
          />
        </div>
        <input
          type="submit"
          value="Compute"
          className="bg-pink-600 px-4 py-2 text-white rounded mt-4"
        />

        {status == "submitted" && (
          <>
            <div className="border border-2 border-pink-600 p-2 mt-8 flex flex-col">
              <p>
                Food Panda Comission:{" "}
                <span className="text-pink-600">
                  Php {commission.toFixed(2)}
                </span>
              </p>
              <p>
                Tax: <span className="text-pink-600">Php {tax.toFixed(2)}</span>
              </p>
              <p className="mt-4">
                You will get{" "}
                <span className="text-pink-600">Php {total.toFixed(2)}</span>
              </p>
            </div>

            <div className="text-xs mt-16 text-gray-400 border-t-2 border-gray-400 pt-2">
              <p>Formula</p>
              <p>Commission = Price * 0.25</p>
              <p>Tax = commission * 0.12</p>
              <p>Total = Price - (commission + tax)</p>
            </div>
          </>
        )}
      </form>

      <footer className="text-xs mt-auto mb-4 flex flex-col items-center">
        <img src={bruskoffeeLogoUrl} width="50" />
      </footer>
    </div>
  );
}

export default App;
