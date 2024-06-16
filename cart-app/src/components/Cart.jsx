/* eslint-disable react/prop-types */
/* import React from 'react' */
import { MdDeleteSweep } from "react-icons/md";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";

const Cart = () => {
  return (
    <div className="cart">
      <main>
        <CartItem
          id="ahsgdhfkska"
          imageSrc={img1}
          name={"Macbook"}
          price={1200}
          quantity={1}
        />
            
      </main>

      <aside>
        <p>SubTotal : $ {1200}</p>
        <p>Shipping : $ {120}</p>
        <p>Tax : $ {120}</p>
        <p>Total : $ {1440}</p>
      </aside>
    </div>
  );
};

const CartItem = ({
  id,
  imageSrc,
  name,
  price,
  quantity,
  increeement,
  decreement,
  deleteHandler,
}) => (
  <div className="cartItem">
    <img src={imageSrc} alt="Items" />

    <article>
      <p>{name}</p>
      <p>$ {price}</p>
    </article>

    <div>
      <button onClick={() => increeement(id)}> + </button>
      <p> {1} </p>
      <button onClick={() => decreement(id)}>-</button>
    </div>

    <MdDeleteSweep onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
