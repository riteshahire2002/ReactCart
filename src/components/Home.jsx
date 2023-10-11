import React from "react";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 ="https://c4.wallpaperflare.com/wallpaper/1017/647/742/food-pizza-still-life-hd-wallpaper-preview.jpg";
const img2 ="https://i.pinimg.com/originals/24/ac/bb/24acbb7530fb22151d3f3f1581fb947d.png";
const img3 = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80";

const Home = () => {
  const productList = [
    {
      name: "Pizza",
      price: 399,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "Biryani",
      price: 249,
      imgSrc: img2,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
    {
      name:"Cake",
      price:349,
      imgSrc:img3,
      id:"okboss",
    }
  ];
  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
     dispatch({type:"addToCart",payload:options});
     dispatch({type: "calculatePrice"});
     toast.success("Added To Cart")
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
}

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home