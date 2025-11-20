import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Test from './components/pages/Test'
import Nav from './components/semantics/Nav'
import Footer from './components/semantics/Footer'

const App = () => {
  return (
    <div>
    <Nav/>

    <div className='w-full h-auto'>
      <Routes>
        <Route path='/' element={<Home/>} />
         <Route path='/Test' element={<Test/>} />
      </Routes>
    </div>
    <Footer/>


    </div>
   
  )
}

export default App