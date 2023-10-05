import React from 'react';
import "./Footer.css"
import Logo from "../../assets/images/logo.jpg"
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="container">
          <div className="image">
            <img src={Logo} alt="" />
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officia fuga laborum id, consectetur ratione repudiandae possimus alias rerum quae itaque ipsum beatae dolor sunt modi cumque eum fugit ab.</p> */}
          </div>
          <ul>
            <h3> بعض الروابط المفيده </h3>
            <li><Link to="/shop" className="link"> المتجر </Link></li>
            <li><Link to="/cart" className="link"> السله  </Link></li>
            <li><Link className="link"> تسجيل الدخول  </Link></li>
            <li><Link className="link"> سياسة الخصوصية </Link></li>
          </ul>
        </div>
        <div className="copyright">
          Copyright &copy;{year} developed by Mahmoud .All rights reserved
        </div>
      </footer>
    </>
  );
}

export default Footer;
