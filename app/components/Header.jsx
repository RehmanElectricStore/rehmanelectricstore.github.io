import React from "react";
import Image from "next/image";
import logo from "../../assets/img/logo.png";
import searchIcon from "../../assets/img/search.png";

const Header = () => {
  return (
    <header id='header'>
      <nav id='nav-bar'>
        <ul id='nav-items'>
          <li className='nav-item'>
            <a href='./'>
              <Image className='logo' src={logo} alt='' />
            </a>
          </li>
          <li className='nav-item'>
            <input id='search-input' type='text' placeholder='Search' />
          </li>
          <li className='nav-item'>
            <button id='search-button'>
              <Image id='search-icon' src={searchIcon} alt='search icon' />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
