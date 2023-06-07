import React, { useState } from "react";

const Calculator = () => {
  // TODO: start coding here!

  const [form, setForm] = useState({
    totalBillValue: 0,
    tip: 0,
    numberOfPeople: 1,
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "numberOfPeople" && value < 1) {
      setForm((prevState) => ({
        ...prevState,
        [name]: 1,
      }));
    } else {
      setForm((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  const handleReset = () => {
    setForm({ totalBillValue: 0, tip: 0, numberOfPeople: 1 });
  };

  return (
    <main>
      <img
        src="./icons/logo.svg"
        className="logo"
        alt="Splitter logo. 'SPLI' on one line and 'TTER' on another to indicate splitting."
      />
      <section className="card">
        <div className="card-left">
          <div className="input-group" id="totalBillGroup">
            <div className="input-label-container">
              <label className="body-text input-label" htmlFor="totalBill">
                Bill
              </label>
              <small className="body-text input-error" id="totalBillError">
                Input field is valid
              </small>
            </div>
            <input
              type="number"
              className="body-l-text input-field"
              placeholder="0"
              name="totalBillValue"
              id="totalBill"
              onChange={handleChange}
            />
          </div>

          <div className="input-group" id="totalTipPercentageGroup">
            <div className="input-label-container">
              <label className="body-text input-label">Select Tip %</label>
              <small
                className="body-text input-error"
                id="totalTipPercentageError"
              >
                Input field is valid
              </small>
            </div>
            <div className="input-tips-container">
              <button
                className="body-l-text input-tip"
                name="tip"
                onClick={handleChange}
                id="tip5"
                value="5"
              >
                5%
              </button>
              <button
                className="body-l-text input-tip"
                name="tip"
                onClick={handleChange}
                id="tip10"
                value="10"
              >
                10%
              </button>
              <button
                className="body-l-text input-tip"
                name="tip"
                onClick={handleChange}
                id="tip15"
                value="15"
              >
                15%
              </button>
              <button
                className="body-l-text input-tip"
                name="tip"
                onClick={handleChange}
                id="tip25"
                value="25"
              >
                25%
              </button>
              <button
                className="body-l-text input-tip"
                name="tip"
                onClick={handleChange}
                id="tip50"
                value="50"
              >
                50%
              </button>
              <input
                type="number"
                className="body-l-text input-field"
                placeholder="Custom"
                id="totalTipPercentage"
                name="tip"
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <div className="input-group" id="numberOfPeopleGroup">
            <div className="input-label-container">
              <label className="body-text input-label" htmlFor="numberOfPeople">
                Number of People
              </label>
              <small className="body-text input-error" id="numberOfPeopleError">
                Input field is valid
              </small>
            </div>
            <input
              type="number"
              className="body-l-text input-field"
              placeholder="1"
              name="numberOfPeople"
              id="numberOfPeople"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="card-right">
          <section className="card-price-container">
            <div>
              <b className="body-text card-price-title">Tip Amount</b>
              <p className="body-s-text card-price-subtitle">/ person</p>
            </div>
            <strong className="strong-text card-price-value" id="tipAmount">
              $
              {Number.parseFloat(
                (form.totalBillValue * (form.tip / 100)) / form.numberOfPeople
              ).toFixed(2)}
            </strong>
          </section>
          <section className="card-price-container">
            <div>
              <b className="body-text card-price-title">Total</b>
              <p className="body-s-text card-price-subtitle">/ person</p>
            </div>
            <strong className="strong-text card-price-value" id="totalPrice">
              $
              {Number.parseFloat(
                form.totalBillValue * (form.tip / 100)
              ).toFixed(2)}
            </strong>
          </section>
          <button onClick={handleReset} className="btn btn-primary btn-reset">
            Reset
          </button>
        </div>
      </section>
    </main>
  );
};

export default Calculator;
