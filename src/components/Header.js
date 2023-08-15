import React,{useState} from 'react'
import { Link,NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
    const data=useSelector((state)=>state.cart.cart)
    const [show,setShow]=useState(false)
    return (
        <>
        <div className='header'>
            <div className="logo">
               <Link to='/'> <img src={require('../logo1.png')} alt="logo" className="logoimage" /></Link>
               </div>
            <div className="navmenu">
                <ul className='menus'>
                    <li><NavLink to='/'> HOME </NavLink></li>
                    {/*<li><NavLink to='/about'> ABOUT US</NavLink></li>*/}
                    <li><NavLink to='/contact'> CONTACT</NavLink></li>
                    <li><NavLink to='/cart'> CART {data.length>=1 ? data.length:''} </NavLink></li>
                </ul>
                <ul className='toggle_menu'>
                <li onClick={()=>setShow(!show)}><span><MenuIcon/></span></li>
                </ul>
            </div>
            
        </div>
        { show &&
            <div className="toggle_menus">
                <ul className='menus' onClick={()=>setShow(false)}>
                    <li><Link to='/'> HOME </Link></li>
                    {/*<li><Link to='/about'> ABOUT US</Link></li>*/}
                    <li><Link to='/contact'> CONTACT</Link></li>
                    <li><Link to='/cart'> CART {data.length>=1 ? data.length:''} </Link></li>
                </ul>
            </div>
        }
        
        </>
    )
}

export default Header