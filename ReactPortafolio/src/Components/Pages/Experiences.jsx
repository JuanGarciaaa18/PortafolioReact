import React from 'react'
import { Header } from '../Layouts/Header/Header'
import { Navbar } from '../Layouts/Header/Navbar/Navbar'
import { Footer } from '../Layouts/Footer/Footer'
import './Experiences.css'

export const Experiences = () => {
  return (
    <div>
        <Header/>


        <div className="experience-container">
            <h1 className="experience-title">
                Lastimosamente no he tenido experiencia laboral, pero cada día me esfuerzo en tener mejores conocimientos e ir reforzando mis habilidades para poder llegar a ejercer mi título en una empresa en esta área: análisis y desarrollo de software.
            </h1>
        </div>

        <Footer/>
    </div>
  )
}