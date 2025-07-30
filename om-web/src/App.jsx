import About from "./components/About"
import Contact from "./components/Contact"
import Founder from "./components/Founder"
import Herosection from "./components/Herosection"
import Navbar from "./components/Navbar"
import OurTeam from "./components/OurTeam"
import Patner from "./components/Patner"



function App() {
 

  return (
     <>
     <div>
      {/* <nav className="w-full bg-gray-800 text-white sticky top-0 z-50 flex justify-between items-center">
        <Navbar/>
      </nav> */}

      {/* hero section */}
      <div  id="home" className="w-full h-fit  md:h-96 ">
        <Herosection/>
      </div>
   
      {/* founder section */}
      <div className="w-full h-fit md:hidden">
         <Founder/>
      </div>

      {/* partner section */}
      <div className="w-full h-fit mt-14   flex justify-center items-center">
        <Patner/>
       </div>

      {/* about section */}
      <div  className="w-full h-fit mt-4  flex justify-center items-center">
        <About/>
      </div>

      {/* our team section */}
      <div id="team" className="w-full h-fit mt-1  flex justify-center items-center">
        <OurTeam/>
      </div>

      {/* contact section */}
      
        <Contact/>
    
     </div>
     </>
  )
}

export default App
