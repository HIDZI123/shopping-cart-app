/* eslint-disable react/prop-types */
/* import React from 'react' */
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartItems, subtotal, shipping, tax, total } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  const addHandler = (id) => {
    dispatch({
      type: "Increment",
      payload: id,
    });
    dispatch({
      type: "Calc",
    });
  };
  const subHandler = (id) => {
    dispatch({
      type: "Decreement",
      payload: id,
    });
    dispatch({
      type: "Calc",
    });
  };
  const deleteItem = (id) => {
    dispatch({
      type: "Delete",
      payload: id,
    });
    dispatch({
      type: "Calc",
    });
  };

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              key={i.id}
              id={i.id}
              imageSrc={i.imageSrc}
              name={i.name}
              price={i.price}
              quantity={i.quantity}
              increement={addHandler}
              decreement={subHandler}
              deleteHandler={deleteItem}
            />
          ))
        ) : (
          <h1> No Items yet </h1>
        )}
      </main>

      <aside>
        <p>SubTotal : $ {subtotal}</p>
        <p>Shipping : $ {shipping}</p>
        <p>Tax : $ {tax}</p>
        <p>Total : $ {total}</p>
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
  increement,
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
      <button onClick={() => increement(id)}> + </button>
      <p> {quantity} </p>
      <button onClick={() => decreement(id)}>-</button>
    </div>

    <MdDeleteSweep onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
