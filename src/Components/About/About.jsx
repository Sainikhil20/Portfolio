import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import abou from '../../assets/abou.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section ">
            <div className="about-left  ">
                <img src={abou} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am skilled in Frontend development and Throughout my career, I have had the previlege of collaborating with prestigious organizations,contributing to their success and growth</p>
                    <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication i bring to each project</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS </p><hr style={{width:"80%"}} /></div>
                    <div className="about-skill"><p>REACT JS </p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>JAVA SCRIPT </p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>NODE JS </p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>7</h1>
                <p>PROJECTS </p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>8.01</h1>
                <p>CGPA </p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5</h1>
                <p>CERTIFICATIONS </p>
            </div>
        </div>
    </div>
  )
}

export default About