import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'

import Footer from './Components/Footer'

import ContactUsSection from './Components/ContactUsSection'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      


     
     

       <Router>
       <Navbar /> 
      <div className="pt-20"> {/* Fixed navbar ke liye padding */}
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/contact_us" element={<ContactUsSection />} />
          
        </Routes>
      </div>
    </Router>
 <Footer/>



    </>


  )
}

export default App
