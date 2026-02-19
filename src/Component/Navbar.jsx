import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React,{useRef} from 'react'

const Navbar = () => {
  const navref = useRef(null)
  const listref=useRef(null)
  useGSAP(()=>{
    const tl=gsap.timeline({delay:0.3})
    tl.from(navref.current,{
      y:-50,
      opacity:0,
      duration:1
    })
   
      tl.from(listref.current.children,{
      y:-50,
     stagger:0.4,
     opacity:0,
     duration:0.7,
    })
  

  })
  return (
    <>
        <nav   className='h-20 bg-gray-800 text-white flex justify-around items-center gap-40' >
           <div ref={navref} className="studio">
            <h2><span className="text-3xl font-bold tracking-tight font-family: 'Space Grotesk', sans-serif;">Caption<span className="gradient-text">Studio</span></span></h2>
           </div>
            <ul ref={listref} className='flex navlist justify-center items-center text-2xl gap-4 font-extrabold'>
                <li>About</li>
                <li>Services</li>
                <li>Reviews</li>
                <li>Skills</li>
            </ul>
        </nav>
      
    </>
  )
}

export default Navbar
