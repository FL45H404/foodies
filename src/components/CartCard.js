import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { IMG_URL } from '../utils/constant'
import DeleteIcon from '@mui/icons-material/Delete';

import { removeFromCart,addToCart,deleteFromCart } from '../features/CartReducer'
const CartCard = ({item}) => {
    const dispatch=useDispatch()
  return (
    <div>
        <div className="cmenus menu-cart">
              <div className='menu-info'>
                <div className='menu-name'>{item.name}</div>
                <div className='menu-price'>Rs: {item.price/100 || item.defaultPrice/100}</div>
                <div className='menu-btn'>
                <button className='menu-btn-remove'  onClick={()=>{
                  dispatch(deleteFromCart(item.id))
                }}> <DeleteIcon className='deletebtn' fontSize='large' sx={{cursor:'pointer'}}/></button></div>
            </div>
            <div className='menu-image1'>
                <img className='menu-img1' src={IMG_URL+item.imageId}/>
                <div className='btns'>
                <button className='leftbtn' 
                onClick={()=>{
                  dispatch(removeFromCart(item.id))
                  
                }}>-</button>
                {item.quantity}
              <button className='rightbtn' 
              onClick={()=>{
                dispatch(addToCart({...item,quantity:1}))
                  
                }}>+</button>
                </div>
               
            </div>
            
        </div>
        <div className='separator'></div>
        </div>

  )
}

export default CartCard