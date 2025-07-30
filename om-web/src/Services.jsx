import React,{useEffect} from 'react'
import OurService from './components/OurService'
import DigitalMark from './components/DigitalMark'
import WebDevelopement from './components/WebDevelopement'
import GraphicDesign from './components/GraphicDesign'
import Crestive from './components/Crestive'
import Contact from './components/Contact'

const Services = () => {

  useEffect(() => {
      window.scrollTo({
      top : 0,
      behavior : "smooth"
    });
  },[])
  return (
    <div  className='w-full h-fit '>
       <OurService/>
       <DigitalMark/>
       <WebDevelopement/>
       <GraphicDesign/>
       <Crestive/>
       <Contact/>
    </div>
  )
}

export default Services
