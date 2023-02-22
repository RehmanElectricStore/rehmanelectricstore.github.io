import React from "react"
import Image from "next/image"
import home from '../../assets/img/home.png'
import contact from '../../assets/img/contact.png'
import address from '../../assets/img/address.png'

const Footer = () => {
  return (
    <footer id='footer-menu'>
      <ul id='footer-items'>
        <li className='footer-item'>
          <Image className='footer-item-icon' src={home} alt='' />
          <p className='footer-item-name' style={{ color: "#F29D38" }}>
            Home
          </p>
        </li>
        <li className='footer-item'>
          <Image className='footer-item-icon' src={contact} alt='' />
          <p className='footer-item-name'>Contact Us</p>
        </li>
        <li className='footer-item'>
          <Image className='footer-item-icon' src={address} alt='' />
          <p className='footer-item-name'>Address</p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
