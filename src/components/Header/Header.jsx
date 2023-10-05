import React,{useRef} from 'react';
import './Header.css'
import Logo from "../../assets/images/logo.jpg"
import { NavLink,Link } from 'react-router-dom';
import UserIcon from '../../assets/images/user-icon.png' 
import { useSelector } from 'react-redux';
import useAuth from '../../custom/useAuth'
import { signOut } from 'firebase/auth';
import {auth} from '../../firebase-config'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Header = () => {

const totalQuantity = useSelector(state => state.cart.totalQuantity)
const {currentUser} = useAuth()
const profileActionRef = useRef(null)
const navigate = useNavigate()
const toggleProFileActions = ()=> profileActionRef.current.classList.toggle('show-profile-action')
const logout = ()=> {
  signOut(auth).then(()=>{
    toast.success('Logged out')
    navigate('/home')
  }).catch((error)=> {  
    toast.error(error.message)
  })
}
  return (
    <>
      <header>
        <div class="container">
            <a href="home"><img src={Logo} alt="" className="logo"/></a>
            <nav>
              <li><NavLink className="link" to="home"> الرئيسية </NavLink></li>
              <li><NavLink className="link" to="shop"> المتجر </NavLink></li>
              <li> <NavLink className="link" to="cart"> السله </NavLink> </li>
            </nav>
            <div class="exta-links">
              <span className='wishlist'><i class="fa-solid fa-heart"></i><span> المفضلة </span> <span id="count">0</span> </span>
                <NavLink to="/cart"><div id="cart-icon"><i class="fa-solid fa-shopping-basket"></i><span> السلة</span> <span id="count">{totalQuantity}</span></div></NavLink>
                <div className='user-icon' onClick={toggleProFileActions}><img src={ currentUser? currentUser.photoURL : UserIcon} alt="" />
                <div className="profile-action" ref={profileActionRef} onClick={toggleProFileActions}>
                  {
                    currentUser? <span onClick={logout}> تسجيل الخروج </span> : <div style={{display:'flex',flexDirection:'column'}}>
                      <Link style={{margin:'5px 0'}} to="/signup"> تسجيل </Link>
                      <Link to="/login"> تسجيل الدخول </Link>
                    </div>
                  }
                </div>
                </div>
            </div>
        </div>
        <div class="category">
            <NavLink to="/"> تصنيفات اخري </NavLink>
            <NavLink to="/clothes">  ملابس </NavLink>
            <NavLink to="/"> الكترونيات </NavLink>
            <NavLink to="/"> الصحة والجمال </NavLink>
            <NavLink to="/">  اكسسوارات موبيل  </NavLink>
        </div>
    </header>
    </>
  );
}

export default Header;
