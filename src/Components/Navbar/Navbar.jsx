import React, { useState } from 'react'
import'./navbar.scss'
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";


const Navbar = () => {
    const [active,setActive]=useState('navBar')
    //function  to toggle navbar
    const showNav = ()=>{
      setActive('navBar activeNavbar')
    }
    //function  to remove navbar
    const removeNavbar = ()=>{
      setActive('navBar ')
    }
            
  return (
    <section className="navbarSection">
       <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1><MdOutlineTravelExplore className="icon"/>Travel.</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">

            <li className="navItems">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItems">
              <a href="#" className="navLink">Packeges</a>
            </li>

            <li className="navItems">
              <a href="#" className="navLink">Shop</a>
            </li>

            <li className="navItems">
              <a href="#" className="navLink">About</a>
            </li>

            <li className="navItems">
              <a href="#" className="navLink">Pages</a>
            </li>

            <li className="navItems">
              <a href="#" className="navLink">News</a>
            </li>

            <li className="navItems">
              <a href="#" className="navLink">Contant</a>
            </li>

            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>

          <div className="closeNavbar" onClick={removeNavbar}>
             <IoIosCloseCircle className='icon'/>
          </div>
        </div>
        <div className="toggleNavbar" onClick={showNav}><TbGridDots className='icon'/></div>
       </header>
    </section>
  )
} 

export default Navbar