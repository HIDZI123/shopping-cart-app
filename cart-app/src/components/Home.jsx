/* eslint-disable react/prop-types */
/* import React from 'react' */
import {toast} from "react-hot-toast"

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png";

const Home = () => {
  const productList = [
    {
      id: "abshsjdjfkf",
      name: "MacBook",
      price: 1200,
      imageSrc: img1,
    },
    {
      id: "kjhgfdsaaas",
      name: "Shoes",
      price: 400,
      imageSrc: img2,
    },
  ];

  const AddtoCart = (options)=>{
    console.log(options);
    toast.success("Addded To Cart");
    
  }

  return (
    <>
      <div className="cards">
        {productList.map((i) => (
          <ProductItems
            key={i.id}
            name={i.name}
            price={i.price}
            imageSrc={i.imageSrc}
            id={i.id}
            addItem={AddtoCart}
           
          />
        ))}
      </div>
    </>
  );
};

const ProductItems = ({ id, name, price, imageSrc, addItem }) => (
  <div className="product">
    <img src={imageSrc} />
    <p> {name}</p>
    <h4> $ {price} </h4>
    <button onClick={() => addItem({ id, name, price, imageSrc, quantity : 1 })}>
      Add To Cart
    </button>
  </div>
);

export default Home;
