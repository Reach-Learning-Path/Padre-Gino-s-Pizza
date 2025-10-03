// import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza.jsx";
import Order from "./Order.jsx";


const App = () => {
    return (
        <div>
            <h1>Padre Gino&apos;s</h1>
      <Order/>
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);