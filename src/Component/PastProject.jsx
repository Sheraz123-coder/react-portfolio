import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { useRef } from 'react'

const PastProject = ({pics,title}) => {
    const videoref = useRef()
    useGSAP(()=>{
        const tl=gsap.timeline()
        tl.from(videoref.current.children,{
            y:120,
            scrollTrigger:{
                trigger:videoref.current.children,
                width:0,
                opacity:0,
                start:"top 80%",
                end:"top 20%",
                scrub:true,
                stagger:{
                    amount:0.4,
                },
                
            }
        })

    })
  return (
   <>
    <div  className="projectcard   flex justify-center items-center gap-4 mt-4   flex-col">
        .
        <div  ref={videoref} className="myimage relative w-3/4">
            <video className='rounded-3xl shadow-md shadow-cyan-500/50 ' src={pics} controls muted autoPlay ></video>
            <div className="projectname transition-all opacity-0 hover:opacity-100 absolute top-50 left-50">
            <h2 className='text-white text-4xl  gradient-text font-bold'>{title}</h2>
        </div>
        </div>
        

    </div>
    
   </>
  )
}

export default PastProject
