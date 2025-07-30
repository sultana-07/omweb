import React from 'react'
import Sidebar from './Sidebar';
import { Link,NavLink } from 'react-router-dom';


const Navbar = () => {

  const [isOpen, setIsOpen] = React.useState(false);
   const [active, setActive] = React.useState('home')

  const handleNavClick = (section) => {
    setActive(section)
    const el = document.getElementById(section)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { name: 'Home', id: '' },
     {name : 'Services', id: 'services'},
   
    { name: 'Contact Us', id: 'contact' },
     { name: 'About Us', id: 'about' },
   
   
    
  ];

  const socialLinks = {
    instagram : "https://www.instagram.com/sparkvisualss?igsh=Y2FsYmNsdHMydHFn", 
    facebook : " https://www.facebook.com/profile.php?id=61578398352866&mibextid=ZbWKwL", 
    linkedin : "  https://www.linkedin.com/in/spark-visuals-699bb7376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ", 
    youtube : "https://youtube.com/@sparkvisualss?si=dZDb7GSMrftyQ7QZ"
}

  const handleup = () => {
    window.scrollTo({
      top : 0,
      behavior : "smooth"
    });
  };
  return (
    <div className="w-full flex md:justify-between justify-between items-center p-3 primary-bg">
         <div onClick={handleup} className='w-28 h-14 cursor-pointer '>
           <img className='w-full h-full object-contain scale-200' src="./nav3.png" alt="logo" />
         </div>

        {/* <i class="fa-solid fa-bars text-2xl  md:hidden " onClick={() => setIsOpen(!isOpen)}></i> */}
   
          <div className='md:hidden cursor-pointer z-50' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <i className="fa-solid fa-times text-2xl md:hidden z-50"></i>
          ) : (
            <i className="fa-solid fa-bars text-2xl md:hidden z-50"></i>
          )}
        </div>


        <div className='hidden md:block md:ml-70 '>
            <ul className="flex space-x-7 font-bold">
             {navItems.map(item => (
              <li key={item.id}>
                <NavLink
                  to={`/${item.id}`}
                  className={`cursor-pointer px-4 py-2 rounded transition-colors duration-200 ${
                    active === item.id
                      ? 'bg-[#64ffda]/30 text-primary font-bold'
                      : 'hover:bg-[#64ffda]/20'
                  }`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.name}
                </NavLink>
              </li>
             
              ))}

             
            </ul>
        </div>

        <div className='hidden  lg:flex space-x-3 lg:ml-40'>
            <div className='bg-white text-secondary  p-2 rounded-full hover:bg-[#87d1e6] '>
           <a href={socialLinks.instagram} target='_blank'>
             <i className="fa-brands  fa-instagram text-xl hover:text-amber-50 "></i>
           </a>

        </div>

        <div className='bg-white text-secondary  p-2 rounded-full hover:bg-[#87d1e6]'>
            <a href={socialLinks.facebook} target='_blank'>
              <i className="fa-brands fa-facebook-f text-xl  hover:text-amber-50 "></i>
            </a>

        </div>

        <div className='bg-white text-secondary  p-2 rounded-full hover:bg-[#87d1e6]'>
           <a href={socialLinks.linkedin} target='_blank'>
             <i className="fa-brands fa-linkedin-in text-xl  hover:text-amber-50"></i>
           </a>

        </div>

         <div className='bg-white text-secondary  p-2 rounded-full hover:bg-[#87d1e6]'>
           <a href={socialLinks.youtube} target='_blank'>
             <i className="fa-brands fa-youtube text-xl  hover:text-amber-50"></i>
           </a>

        </div>

      
        </div>

        {isOpen && <Sidebar setIsOpen = {setIsOpen}/>}
    </div>
  )
}

export default Navbar
