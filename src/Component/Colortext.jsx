import {useGSAP} from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
const Colortext = () => {
  const textref = useRef(null)
  useGSAP(()=>{
    const tl=gsap.timeline()
    tl.from(textref.current,{
      y:150,
      scrollTrigger:{
        trigger:textref.current,
        start:"top 80%",
        end:"top 30%",
        scrub:1,
        stagger:0.3,
        
     
      }
      
       
    })
    
    
    

  })
  
  

  return (
    <div >
         <div ref={textref} className="relative h-fit z-10 text-center px-6  mx-auto">
             <div className="heading relative  flex justify-around  p-10 items-center flex-col">
            <h1 className="text-5xl font-extrabold">
              Hi,I am <span className="gradient-text">Muhammad Zeeshan</span>
            </h1>
            <div className="para">

            <p className="text-bold">
             
              A professional video editor transforming raw footage into
              compelling narratives that engage, inspire, and leave lasting
              impressions.
            </p>
            </div>

          </div>

          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-8"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse">
            </span> <span className="text-sm text-white-400">Available for freelance work</span>
     </div>
     <div   className="heading">
       <h1   className="hero-title text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 font-family: 'Outfit', sans-serif;"><span className="block text-white">Crafting Visual</span> <span className="block gradient-text">Stories That</span> <span className="block text-white">Captivate</span></h1>

     </div>
    
           </div>
    </div>
  )
}

export default Colortext