import React from "react";
import ReactDom from "react-dom/client";

const App = () => {
  return <h1>Hello React</h1>;
};

//React v18 reactte bağlanmak için

const root = ReactDom.createRoot(document.getElementById("root"));

//React StrickModen tek yaptığı şey geliştirme sırasında hatayı bulmak için tüm bileşenleri iki kez oluşturmak içindir.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
