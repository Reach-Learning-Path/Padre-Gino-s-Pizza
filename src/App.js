const Pizza = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("p", {}, props.descripton)
    ])
}




const App = () => {
    return React.createElement(
        "div", {},
        [
            React.createElement("h1", {}, "Padre Gino's"),
            React.createElement(Pizza, {
                name: "Americano Pizza",
                descripton: "French Fries and hot dogs wtf Italy ??!",
            }),
            React.createElement(Pizza, {
                name: "Baked Patato Pizza",
                descripton: "Baked Patato with sour cream and chives",
            }),
            React.createElement(Pizza, {
                name: "Hawaiian Pizza",
                descripton: "Pineaplle and Ham... okay",
            }),
            React.createElement(Pizza, {
                name: "Veggie Pizza",
                descripton: "Tomato, peppers, onions, mushrooms, olives",
            }),
            React.createElement(Pizza, {
                name: "Dope Pizza",
                descripton: "The dope pizza",
            }),

        ]
    );
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));