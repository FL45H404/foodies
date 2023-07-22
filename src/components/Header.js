import React,{useState} from 'react'
import { Link } from 'react-router-dom'
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
                    <li><Link to='/'> HOME </Link></li>
                    {/*<li><Link to='/about'> ABOUT US</Link></li>*/}
                    <li><Link to='/contact'> CONTACT</Link></li>
                    <li><Link to='/cart'> CART {data.length>=1 ? data.length:''} </Link></li>
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