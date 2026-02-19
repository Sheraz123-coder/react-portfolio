import React from 'react'

const Footer = () => {

  return (
    <>
    <div className="footer h-fit p-10 bg-gray-900 flex justify-center items-center flex-col gap-20 text-white">

    <div className="heading ">
        <h2 className='font-extrabold text-4xl text-orange-400'>Lets Link Up</h2>
    </div>
    <div className="links flex justify-center items-center gap-8">
        <a className='bg-green-500 rounded-2xl text-center w-20  h-10 text-2xl ' href="">Fiverr</a>
        <a className='bg-green-800 rounded-2xl text-center h-10 text-2xl w-30' href="">Whatsapp</a>
        <a className='bg-blue-500 rounded-2xl text-center h-10 text-2xl w-30' href="">FaceBook</a>
        <a className='bg-blue-800 rounded-2xl text-center h-10 text-2xl w-25' href="">Discord</a>
    </div>
    <div className="mail text-center">
        <p>or mail at <span className='font-bold text-orange-800'>hello@zee.gmail.com</span></p>
    </div>
    <div className="thanks">
        <p>Thank you for taking the time to review my portfolio. I look forward to the opportunity to work with you and bring your vision to life through video.</p>
    </div>


    </div>

    </>
  )
}

export default Footer
