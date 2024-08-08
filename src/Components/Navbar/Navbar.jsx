import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from'../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () => {

  

  

  return (
    <div className='navbar'>
        
        <h1>PORTFOLIO.</h1>
        <ul className="nav-menu">
            <li><AnchorLink className='anchor-link' offset={50} href='#home'><p>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p>About me</p></AnchorLink></li>
            
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p>Services</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#Mywork'><p>My Projects</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink></li>
        </ul>
        
        {/*         
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div> 
         */}
        
    </div>
  )
}

export default Navbar