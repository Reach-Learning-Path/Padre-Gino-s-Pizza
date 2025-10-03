import Pizza from "./Pizza";
import { useState }  from "react";

export default function Order() {
  const pizzaType = "pepperoni";
  const pizzaSize = "m";
  return (
    <div className="order">
      <h2>Create order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select name="pizza-type" value={pizzaType}>
              <option value="pepperoni">The Pepperoni Pizza</option>
              <option value="hawaiian">The Hawaiian Pizza</option>
              <option value="big-meat">The Big Meat Pizza</option>
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input
                  checked={pizzaSize === "S"}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
                     <span>
                <input
                  checked={pizzaSize === "M"}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-M"
                />
                <label htmlFor="pizza-M">Medium</label>
              </span>
                     <span>
                <input
                  checked={pizzaSize === "L"}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-L"
                />
                <label htmlFor="pizza-L">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
          <div className = "order-pizzas">
            <Pizza
             name="Pepperoni"
             descripton = "another- pizza"
             image  />
          </div>
        </div>
      </form>
    </div>
  );
}
