import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Pizza = () => {
  return (
    <>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </>
  );
};

const Header = () => {
  //Style jsx te bir nesne olarak tanımlanır inline olarak css tanımlamak istiyorsak bu şekilde bir nesne yaratıp style'ın içine tanımladığımız nesneyi verebiliriz.
  //   const style = { color: "red", fontSize: "48px" };
  // şimdilik geçerli olmaması iöçin style boş nesne olarak veriyoruz.

  const style = {};
  return (
    <header className="header">
      {" "}
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      {" "}
      {new Date().toLocaleTimeString()}. We're current open{" "}
    </footer>
  );
};

//React v18 reactte bağlanmak için

const root = ReactDom.createRoot(document.getElementById("root"));

//React StrickModen tek yaptığı şey geliştirme sırasında hatayı bulmak için tüm bileşenleri iki kez oluşturmak içindir.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
