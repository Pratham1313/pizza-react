import "./styles.css";

function App() {
  return (
    <main>
      <Header />
      <Menu />
    </main>
  );
}

const pizza_data = [
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: "₹499",
    photoName: "margherita.jpg",
    soldOut: false
  },
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: "₹359",
    photoName: "focaccia.jpg",
    soldOut: false
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: "₹449",
    photoName: "spinaci.jpg",
    soldOut: false
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: "₹599",
    photoName: "funghi.jpg",
    soldOut: false
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: "₹400",
    photoName: "salamino.jpg",
    soldOut: true
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: "₹759",
    photoName: "prosciutto.jpg",
    soldOut: false
  }
];

function Header() {
  return (
    <header>
      <img
        className="title_img"
        src="Domino's_pizza_logo.svg.png"
        alt="dominos"
      ></img>
      <span className="title">DOMINO'S</span>
    </header>
  );
}

function Menu() {
  const pizza = pizza_data;
  return (
    <main>
      <p className="text">
        Authentic Italian cuisine. 6 creative dishes to choose from.All from our
        stone oven, all organic, all delicious.
      </p>
      <h1 className="menus"> MENU </h1>
      <ul className="pizzas">
        {pizza.map((pizza) => (
          <Pizzas pizza_obj={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}

function Pizzas({ pizza_obj }) {
  return (
    <li className={`pizza${pizza_obj.soldOut ? "sold_out" : ""}`}>
      <img src={pizza_obj.photoName} alt={pizza_obj.name} />
      <div>
        <h3>{pizza_obj.name}</h3>
        <p>{pizza_obj.ingredients}</p>
        <span>{pizza_obj.soldOut ? "SOLD OUT" : pizza_obj.price}</span>
        <div>{pizza_obj.soldOut ? null : <button>Add To Cart</button>}</div>
      </div>
    </li>
  );
}
export default App;
