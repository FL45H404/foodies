import React from 'react'
import { IMG_URL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import {addToCart,removeFromCart,deleteFromCart} from '../features/CartReducer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Menu = (data) => {
  const dispatch=useDispatch()
    const {name,description,price,imageId,defaultPrice,id}=data?.data
    console.log(data)
  return (
    <div>
    <div className="menus">
        <div className='menu-info'>
            <div className='menu-name'>{name}</div>
            <div className='menu-price'>Rs: {price/100 || defaultPrice/100}</div>
            <div className='menu-desc'>{description}</div>
        </div>
        <div className='menu-image'>
            <img className='menu-img' src={IMG_URL+imageId}/>
            <button className='menu-addbtn' 
            onClick={()=>{
              dispatch(addToCart({...data.data,quantity:1})
              )
              toast.success('Added to Cart', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            }}>Add To Cart</button>
            <ToastContainer />
           {/**  <button onClick={()=>{
              dispatch(deleteFromCart(id))
            }}>Remove</button> */}
        </div>
       
    </div>
    <div className='separator'></div>
    </div>
  )
}

export default Menu