import React from 'react'
import { Header } from '../Layouts/Header/Header'
import { Navbar } from '../Layouts/Header/Navbar/Navbar'
import { Footer } from '../Layouts/Footer/Footer'
import './TechnicalSkills.css'

export const TechnicalSkills = () => {
  return (
    <>
        <Header/>
  
        {/* Título principal */}
        <h1 className="skills-title"> Soy un desarrollador de software con experiencia en React, Java, C# y JavaScripty estas son mis habilidades técnicas</h1>
        <div className='container'>
            {/* Primer ícono con barra de progreso */}
            <div className="image-wrapper">
                <img src="./src/assets/icons/js.png" alt="JavaScript Logo" />
                <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: '60%' }}></div>
                </div>
            </div>

            {/* Segundo ícono con barra de progreso */}
            <div className="image-wrapper">
                <img src="./src/assets/icons/react.webp" alt="React Logo" />
                <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: '50%' }}></div>
                </div>
            </div>

            {/* Tercer ícono con barra de progreso */}
            <div className="image-wrapper">
                <img src="./src/assets/icons/Java.webp" alt="Java Logo" />
                <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: '40%' }}></div>
                </div>
            </div>

            <div className="image-wrapper">
                <img src="./src/assets/icons/cshar.png" alt="Java Logo" />
                <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: '50%' }}></div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}