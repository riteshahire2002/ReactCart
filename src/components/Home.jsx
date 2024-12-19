import React from "react";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://c4.wallpaperflare.com/wallpaper/1017/647/742/food-pizza-still-life-hd-wallpaper-preview.jpg";
const img2 =
  "https://img.freepik.com/free-photo/plate-biryani-with-bowl-rice-bowl-food-table_505751-3814.jpg?t=st=1734625231~exp=1734628831~hmac=4f503a6024d71ea4f0b35f1aee3fac291de6734176f72d0fa2df97bd8e097462&w=1060";
const img3 =
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80";
const img4 =
  "https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const img5 =
  "https://www.jagranimages.com/images/newimg/khanakhazana/02_2024-french_fries_recipe.webp";
const img6 =
  "https://static.vecteezy.com/system/resources/thumbnails/044/179/737/small_2x/two-sandwiches-with-a-side-of-salad-and-a-bowl-of-sauce-photo.jpeg";
const img7 =
  "https://img.freepik.com/free-photo/fresh-fruity-dessert-wooden-table-generated-by-ai_188544-19761.jpg?t=st=1734625018~exp=1734628618~hmac=aa8356d1a2e0a3a65e90a6531f04fc3ea60172ae2726f14e3eaa5ea1a78141c3&w=1060";
const img8 =
  "https://img.freepik.com/free-photo/front-view-fresh-fruit-cocktail-with-fresh-fruit-slices-ice-cooling-white-drink-juice-cocktail-fruit-color_140725-24732.jpg?t=st=1734625427~exp=1734629027~hmac=7a6db9340561ece572e5ca1d3aec1614ef2f3eb61a93790d04fc4f9bc70155b5&w=996";

const Home = () => {
  const productList = [
    {
      name: "Pizza",
      price: 399,
      imgSrc: img1,
      id: "pizzaa",
    },
    {
      name: "Biryani",
      price: 249,
      imgSrc: img2,
      id: "biryani",
    },
    {
      name: "Cake",
      price: 349,
      imgSrc: img3,
      id: "cake",
    },
    {
      name: "Burger",
      price: 199,
      imgSrc: img4,
      id: "burger",
    },
    {
      name: "French Fries",
      price: 149,
      imgSrc: img5,
      id: "fries",
    },
    {
      name: "Sandwich",
      price: 99,
      imgSrc: img6,
      id: "sandWich",
    },
    {
      name: "Ice-Creame",
      price: 179,
      imgSrc: img7,
      id: "iceCreame",
    },
    {
      name: "Cold Drink",
      price: 79,
      imgSrc: img8,
      id: "coldDrink",
    },
  ];
  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>₹ {price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
