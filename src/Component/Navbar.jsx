import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

const Navbar = () => {
  const navref = useRef(null)
  const listref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    tl.from(navref.current, {
      y: -50,
      opacity: 0,
      duration: 1
    })

    if (listref.current) {
      tl.from(listref.current.children, {
        y: -50,
        stagger: 0.2,
        opacity: 0,
        duration: 0.6,
      })
    }
  }, [])

  return (
    <nav className="bg-gray-800 text-white px-6 md:px-20">
      <div className="h-20 flex justify-between items-center">

        {/* Logo */}
        <div ref={navref}>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Caption<span className="text-purple-400">Studio</span>
          </h2>
        </div>

        {/* Desktop Menu */}
        <ul
          ref={listref}
          className="hidden md:flex gap-8 text-lg font-semibold"
        >
          <li className="hover:text-purple-400 cursor-pointer">About</li>
          <li className="hover:text-purple-400 cursor-pointer">Services</li>
          <li className="hover:text-purple-400 cursor-pointer">Reviews</li>
          <li className="hover:text-purple-400 cursor-pointer">Skills</li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 pb-6 text-lg font-semibold">
          <li className="hover:text-purple-400 cursor-pointer">About</li>
          <li className="hover:text-purple-400 cursor-pointer">Services</li>
          <li className="hover:text-purple-400 cursor-pointer">Reviews</li>
          <li className="hover:text-purple-400 cursor-pointer">Skills</li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar