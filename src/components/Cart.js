import React from "react";
import {emptyCart} from '../features/CartReducer'
import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import ForwardIcon from "@mui/icons-material/Forward";
import {  useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const data = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);
  const data1 = [
    {
      id: "115693035",
      name: "Veg McMuffin",
      category: "McBreakfast",
      description:
        "Grilled Spinach & Corn patty and slice of processed Cheddar cheese nestled between a toasty English Muffin.",
      imageId: "1769673d73f6c6079a33e595e1f07b17",
      isVeg: 1,
      price: 11524,
      variants: {},
      variantsV2: {},
      nextAvailableAtMessage: "Next available at 9:15 am, tomorrow",
      itemAttribute: {
        vegClassifier: "VEG",
      },
      ribbon: {},
      type: "ITEM",
      itemBadge: {},
      badgesV2: {},
      ratings: {
        aggregatedRating: {},
      },
    },
    {
      id: "115693036",
      name: "Veg McMuffin 2 Pc Meal",
      category: "McBreakfast",
      description:
        "Start your day with a combo of Veg McMuffin and a Coffee (S)",
      imageId: "0baaae4827502f79531abe9902cc45c4",
      isVeg: 1,
      price: 23714,
      variants: {},
      variantsV2: {},
      nextAvailableAtMessage: "Next available at 9:15 am, tomorrow",
      itemAttribute: {
        vegClassifier: "VEG",
      },
      ribbon: {},
      type: "ITEM",
      itemBadge: {},
      badgesV2: {},
      ratings: {
        aggregatedRating: {},
      },
    },
    {
      id: "115693037",
      name: "Veg McMuffin 3 Pc Meal",
      category: "McBreakfast",
      description: "Veg McMuffin 3 Pc Meal",
      imageId: "20f66006b4643cc615121c9089c0bb58",
      isVeg: 1,
      price: 25905,
      variants: {},
      variantsV2: {},
      nextAvailableAtMessage: "Next available at 9:15 am, tomorrow",
      itemAttribute: {
        vegClassifier: "VEG",
      },
      ribbon: {},
      type: "ITEM",
      itemBadge: {},
      badgesV2: {},
      ratings: {
        aggregatedRating: {},
      },
    },
  ];

  return (
    <div className="cart">
      <div className="cart-nav">
      <div className="backbtn" onClick={()=>navigate(-1)}>
        <ForwardIcon className="backbutton" /> BACK
      </div>
        <div className="cart-nav-right" onClick={()=>dispatch(emptyCart())}>EMPTY CART </div>
      </div>
      <div className="cart-container">
        {data.length>0 ? (
          <div className="cart-info">
          {data.map((item) => {
            return <CartCard key={item.id} item={item} />;
          })}
        </div>
        ):(
          <div className="cart-info">
            <div className="cart-info-head">Cart is empty</div>
            <div className="cart-info-btn"><button onClick={()=>navigate('/')}>ADD ITEM</button></div>
          </div>
        )}
        <div className="billslide">
          <h2>Total : {total / 100}</h2>
          <button className="billslidebtn">Pay Amount</button>
        </div>
        </div>
        
    </div>
  );
};

export default Cart;
