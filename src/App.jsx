import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza.jsx";

const App = () => {
    return (
        <div>
            <h1>Padre Gino&apos;s</h1>
            <Pizza
                name="Americano Pizza"
                description="French Fries and hot dogs wtf Italy ??!"
            />
            <Pizza
                name="Baked Potato Pizza"
                description="Baked Potato with sour cream and chives"
            />
            <Pizza
                name="Hawaiian Pizza"
                description="Pineapple and Ham... okay"
            />
            <Pizza
                name="Veggie Pizza"
                description="Tomato, peppers, onions, mushrooms, olives"
            />
            <Pizza
                name="Dope Pizza"
                description="The dope pizza"
            />
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);