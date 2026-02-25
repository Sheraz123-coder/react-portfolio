import React from 'react'
import { FaFacebook, FaWhatsapp, FaDiscord } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="
      bg-gray-900 
      text-white 
      px-6 
      sm:px-10 
      py-12 
      flex 
      flex-col 
      items-center 
      gap-12
      text-center
    ">

      {/* Heading */}
      <div>
        <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-orange-400">
          Lets Link Up
        </h2>
      </div>

      {/* Social Links */}
      <div className="
        flex 
        flex-wrap 
        justify-center 
        items-center 
        gap-6 
        text-3xl
      ">
        <a 
          className="hover:scale-110 transition duration-300 text-green-500"
          href=""
        >
          <FaWhatsapp />
        </a>

        <a 
          className="hover:scale-110 transition duration-300 text-blue-500"
          href=""
        >
          <FaFacebook />
        </a>

        <a 
          className="hover:scale-110 transition duration-300 text-indigo-400"
          href=""
        >
          <FaDiscord />
        </a>
      </div>

      {/* Email */}
      <div>
        <p className="text-sm sm:text-base">
          or mail at{" "}
          <span className="font-bold text-orange-500 break-all">
            hello@zee.gmail.com
          </span>
        </p>
      </div>

      {/* Thank You Text */}
      <div className="max-w-3xl">
        <p className="text-sm sm:text-base leading-7 text-gray-300">
          Thank you for taking the time to review my portfolio. 
          I look forward to the opportunity to work with you 
          and bring your vision to life through video.
        </p>
      </div>

    </div>
  )
}

export default Footer