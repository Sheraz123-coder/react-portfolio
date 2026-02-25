import React from 'react'

const Svgcards = ({ icon, heading, para }) => {
  return (
    <div className="card 
      w-full 
      sm:w-[300px] 
      md:w-[320px] 
      lg:w-[350px] 
      min-h-[300px] 
      flex flex-col 
      justify-center 
      items-center 
      gap-3 
      p-6 
      text-center">
      
      <div className="icons">
        {icon}
      </div>

      <div className="skill">
        <h2 className="gradient-text font-bold text-3xl">
          {heading}
        </h2>
      </div>

      <div className="description">
        <p className="leading-7">
          {para}
        </p>
      </div>

    </div>
  )
}

export default Svgcards