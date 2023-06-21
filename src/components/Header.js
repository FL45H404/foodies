import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
    const data=useSelector((state)=>state.cart.cart)
    console.log(data)
    return (
        <div className='header'>
            <div className="logo">
                <img src={require('../logo1.png')} alt="logo" className="logoimage" />
            </div>
            <div className="navmenu">
                <ul>
                    <li><Link to='/'> HOME </Link></li>
                    <li><Link to='/about'> ABOUT US</Link></li>
                    <li><Link to='/contact'> CONTACT</Link></li>
                    <li><Link to='/cart'> CART {data.length>=1 ? data.length:''} </Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header