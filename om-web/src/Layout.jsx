import React,{useEffect} from 'react'
import Navbar from './components/Navbar'
import {Outlet} from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Layout = () => {
    useEffect(() => {
      Aos.init({ duration: 1000, once: false })
    }, [])
  return (
   <>
    <div  className="w-full bg-gray-800 text-white fixed top-0 left-0 z-50 flex justify-evenly items-center">
      <Navbar />
       </div>
      <div className="pt-20"> {/* Adjust pt-20 to match your navbar height */}
      <Outlet />
    </div>
   
   </>
  )
}

export default Layout

  
