const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      description: "French Fries and hot dogs wtf Italy ??!",
    }),
    React.createElement(Pizza, {
      name: "Baked Potato Pizza",
      description: "Baked Potato with sour cream and chives",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian Pizza",
      description: "Pineapple and Ham... okay",
    }),
    React.createElement(Pizza, {
      name: "Veggie Pizza",
      description: "Tomato, peppers, onions, mushrooms, olives",
    }),
    React.createElement(Pizza, {
      name: "Dope Pizza",
      description: "The dope pizza",
    }),
  ]);
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
