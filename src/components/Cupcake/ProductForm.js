import React, { useState } from "react";

export default function ProductForm() {
  const [size, setSize] = useState("");
  const [amount, setAmount] = useState("");

  const handleChange = (event)=> {
    setSize({value:event.target.value})
  }


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="size-input">
        <lable> Size</lable>
        <br />
        <select name="size" id="size" value={size} onChange={handleChange}>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>
      <div className="amount-input">
        <lable> Amount</lable>
        <br />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="enter Amount"
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Order
      </button>
    </div>
  );
}
