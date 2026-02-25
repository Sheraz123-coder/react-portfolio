import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const PastProject = ({ pics, title }) => {
  const videoref = useRef()

  useGSAP(() => {
    gsap.from(videoref.current, {
      y: 120,
      opacity: 0,
      scrollTrigger: {
        trigger: videoref.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      }
    })
  }, [])

  return (
    <div className="projectcard flex justify-center items-center mt-6 px-4">

      <div
        ref={videoref}
        className="
          relative 
          w-full 
          sm:w-[90%] 
          md:w-[75%] 
          lg:w-[60%] 
          group
        "
      >
        <video
          className="
            w-full 
            h-auto 
            rounded-3xl 
            shadow-md 
            shadow-cyan-500/50
          "
          src={pics}
          controls
          muted
        />

        {/* Hover Title */}
        <div className="
          absolute 
          inset-0 
          flex 
          items-center 
          justify-center
          opacity-0 
          group-hover:opacity-100
          transition-all 
          duration-300
          bg-black/40
          rounded-3xl
        ">
          <h2 className="
            text-white 
            text-xl 
            sm:text-2xl 
            md:text-3xl 
            font-bold
            text-center
          ">
            {title}
          </h2>
        </div>

      </div>
    </div>
  )
}

export default PastProject