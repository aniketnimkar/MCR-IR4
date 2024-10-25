import { useState } from "react";
import Header from "./Header";
import "./App.css";

function App() {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [waterproof, setWaterProof] = useState("");
  const [condition, setCondition] = useState("");
  const [Feature, setFeature] = useState([]);
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [cost, setCost] = useState("");
  const [VenderName, setVendorName] = useState("");
  const [formData, setFormData] = useState(false);

  const featureHandler = (event) => {
    let value = event.target.value;
    if (event.target.checked) {
      setFeature((prev) => [...prev, value]);
    } else {
      setFeature((prev) => prev.filter((val) => val !== value));
    }
  };
  const formHandler = (event) => {
    event.preventDefault();
    if (
      productName &&
      quantity &&
      category &&
      condition &&
      VenderName &&
      cost &&
      number &&
      date
    ) {
      setFormData(true);
    }
  };

  return (
    <>
      <Header />
      <main className="bg-dark text-white">
        <div className="container">
          <h1>Inventory Form</h1>
          <form onSubmit={formHandler}>
            <label htmlFor="productName" className="mb-2">
              Product Name:
            </label>
            <br />
            <input
              type="text"
              id="productName"
              className="form-control"
              required
              onChange={(event) => setProductName(event.target.value)}
            />
            <br />
            <label htmlFor="quantity" className="mb-2">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              className="form-control"
              required
              onChange={(event) => setQuantity(event.target.value)}
            />
            <br />
            <label htmlFor="category" className="mb-2">
              {" "}
              Category:
            </label>
            <select
              id="category"
              className="form-control"
              required
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Clothing">Clothing</option>
              <option value="Footwear">Footwear</option>
              <option value="Equipment">Equipment</option>
            </select>
            <br />
            <label htmlFor="condition" className="mb-2">
              {" "}
              Condition
            </label>
            <br />
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="condition"
                value="new"
                required
                onChange={(event) => setCondition(event.target.value)}
              />
              <label className="form-check-lable">New</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="condition"
                value="new"
                required
                onChange={(event) => setCondition(event.target.value)}
              />
              <label className="form-check-lable">Used</label>
            </div>
            <br />
            <br />
            <input
              type="checkbox"
              value="isWaterproof"
              onChange={(event) => setWaterProof(event.target.value)}
            />{" "}
            Waterproof
            <br />
            <br />
            <label>Features:</label>
            <br />
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                value="lightweight"
                className="form-check-input"
                onChange={featureHandler}
              />
              <label className="form-check-lable">Lightweight</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                value="Durable"
                className="form-check-input"
                onChange={featureHandler}
              />
              <label className="form-check-lable">Durable</label>
            </div>
            <br />
            <br />
            <label htmlFor="storage" className="mb-2">
              Date of Sorage:
            </label>
            <input
              type="date"
              id="storage"
              className="form-control"
              required
              onChange={(event) => setDate(event.target.value)}
            />
            <br />
            <label htmlFor="number" className="mb-2">
              Storage Unit Number:
            </label>
            <br />
            <input
              type="number"
              id="number"
              className="form-control"
              required
              onChange={(event) => setNumber(event.target.value)}
            />
            <br />
            <label htmlFor="number" className="mb-2">
              Unit Cost:
            </label>
            <br />
            <input
              type="number"
              id="cost"
              className="form-control"
              required
              onChange={(event) => setCost(event.target.value)}
            />
            <br />
            <label htmlFor="name" className="mb-2">
              Vender Name:
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              required
              onChange={(event) => setVendorName(event.target.value)}
            />
            <br />
            <button className="btn btn-primary mb-4" type="submit">
              Submit
            </button>
          </form>

          {formData && (
            <div>
              <h2>Submitted Details:</h2>
              <p>Product Name: {productName}</p>
              <p>Quanity: {quantity}</p>
              <p>Category: {category}</p>
              <p>Condition: {condition}</p>
              <p>Waterproof: {waterproof ? "Yes" : "No"}</p>
              <p>Features: {Feature.join(", ") || "none"}</p>
              <p>Date of Storage: {date}</p>
              <p>Storage Unit Number: {number}</p>
              <p>Unit Cost: ${cost}</p>
              <p>Vendor Name: {VenderName}</p>
              <p>Total Cost: ${quantity * cost}.00</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
