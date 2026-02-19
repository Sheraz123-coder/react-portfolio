import React from 'react'


const Svgcards = ({icon,heading,para}) => {
  return (
   <>
   <div className="card h-76 w-76  flex justify-center items-center gap-2 p-2 flex-col">
    <div className="icons">
        {icon}
    </div>
    <div className="skill">
        <h2 className='gradient-text font-bold text-3xl'>{heading}</h2>
    </div>
    <div className="description">
        <p className='p-4 leading-7'>{para}</p>
    </div>

   </div>


   </>
  )
}

export default Svgcards
