import React from 'react'
import { Home } from './Components/Pages/Home'
import { Routes,Route } from 'react-router-dom'
import {TechnicalSkills} from './Components/Pages/TechnicalSkills'
import {SocialSkills} from './Components/Pages/SocialSkills'
import {Experiences} from './Components/Pages/Experiences'
import {Education} from './Components/Pages/Education'
export const App = () => {
  return (

  <>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/TechnicalSkills" element={<TechnicalSkills/>}/>
      <Route path="/SocialSkills" element={<SocialSkills/>}/>
      <Route path="/Experiences" element={<Experiences/>}/>
      <Route path="/Education" element={<Education/>}/>
    </Routes>
  </>

      
  )
}
