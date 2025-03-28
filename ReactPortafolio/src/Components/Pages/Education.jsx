import React from 'react';
import { Header } from '../Layouts/Header/Header';
import { Navbar } from '../Layouts/Header/Navbar/Navbar';
import { Footer } from '../Layouts/Footer/Footer';
import './Education.css';

export const Education = () => {
  return (
    <div>
      <Header />
   

      <h1 className="education-title">Educación</h1>
      
      <div className="education-container">
        {/* Primer contenedor */}
        <div className="education-card">
          <h2>Bachiller Académico Bilingüe</h2>
          <p>Graduado con énfasis en habilidades bilingües y académicas.</p>
        </div>

        {/* Segundo contenedor */}
        <div className="education-card">
          <h2>Técnico en Análisis y Desarrollo de Software</h2>
          <p>Especializado en el diseño, desarrollo y análisis de aplicaciones de software.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};