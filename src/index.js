import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    id: 0,
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    id: 1,
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    id: 2,
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    id: 3,
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    id: 299,
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    id: 562,
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

const Header = () => {
  //Style jsx te bir nesne olarak tanımlanır inline olarak css tanımlamak istiyorsak bu şekilde bir nesne yaratıp style'ın içine tanımladığımız nesneyi verebiliriz.
  //   const style = { color: "red", fontSize: "48px" };
  // şimdilik geçerli olmaması iöçin style boş nesne olarak veriyoruz.

  //const style = {};
  return (
    <header className="header">
      {/* <h1 style={{ color: "red", fontSize: "48px" }}>Fast React Pizza Co.</h1> */}
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* && operatötü koyduğumuz zaman (numPizzas sonrası).. Şuan ternary ile yaptık.. Aynı şekilde çalışıyor ancak ternaryde false kısmınıda : sonrası tanımlayabiliyoruz.Burada numPizzas pizza boş arrayken sıfır yani falsy değerdir. Bu sebeple ul kısmı hiç çalışmaz ve bu sebeple ekrana 0 yazdırılır. Bunun olmaması için numPizzas büyütür sıfırdan yapabiliriz. O zaman ekranda 0 görmeyiz*/}

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas ">
            {/* List rendring datayı çekerek dinamik olarak oluşrueduğumuz */}
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.id} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}

      {/* Manuel olarak elle yazdığımız */}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Mushrooms"
        ingredients="Tomato, mushrooms"
        photoName="pizzas/funghi.jpg"
        price="12"
      />
      <Pizza name="Pizza Salad" photoName="pizzas/margherita.jpg" price="100" /> */}
    </main>
  );
};
const Pizza = ({ pizzaObj }) => {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      {/* desturacturing props. Props nesnesini destruct etmek için süsülü parantaz açıp içindeki nesneyi alıyoruz. */}
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h2>{pizzaObj.name}</h2>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  //Eary return : Genellikle ternary operator kullansakta bazı durumlarda React return dışında component içerisine de return tanımlamak isteyebiliriz.Burada returnin dışında if ile return tanımalayacağız. Aşağıdaki if ile kurulan yerde returnü render etmeden  direkt olarak if koşulunu döndürür.

  //if (!isOpen) return <h2>Closed</h2>;

  return (
    <footer className="footer">
      <div className="order">
        {/* And operatoru her zaman sol taraf true veya truty ise kısa devre yapar ve and operatöründen sonraki alanı gösterir. */}
        {isOpen ? (
          <Order closeHour={closeHour} />
        ) : (
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00
          </p>
        )}
      </div>
    </footer>
  );
};

//Burada order kısmı uzun geldiği için footer alanından ayırdık ve props olarak özelliklerini ilettik

const Order = ({ closeHour }) => {
  return <p>We're open until {closeHour}:00 . Come visit us or order online</p>;
};
<button className="btn">Order</button>;

//React v18 reactte bağlanmak için

const root = ReactDom.createRoot(document.getElementById("root"));

//React StrickModen tek yaptığı şey geliştirme sırasında hatayı bulmak için tüm bileşenleri iki kez oluşturmak içindir.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
