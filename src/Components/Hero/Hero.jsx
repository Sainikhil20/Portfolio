import React from 'react'
import './Hero.css'
import modified from '../../assets/modified.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={modified} alt="" />
        <h1><span>I'm Sainikhil,</span> Fresher</h1>
        <p>"Excited to announce that I have recently graduated with a bachelors in ECE from Vardhaman college of engineering. I am now looking for entry-level opportunities in IT field. If you know of any openings or have any advice, please let me know!"</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume"><a href="https://drive.google.com/file/d/1EZxTrEONZdDThuUCu8NpsKOr8x0n04hb/view?usp=sharing" target="_blank" >My resume</a></div>
    

        </div>
    </div>
  )
};

export default Hero