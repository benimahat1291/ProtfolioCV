'use client'
import Image from 'next/image'
import { useState } from 'react'

import logo from '@/assets/brand/pragmattic.svg'
import Button from '@/components/Button'
import HomeNav, { SectionId } from '@/components/HomeNav'
import ImageSequenceHeader from '@/components/ImageSequenceHeader'
import TestimonialsMarquee from '@/components/Marquee'
import Modal from '@/components/Modal'
import SideMenu from '@/components/SideMenu'
import BackgroundCanvas from '@/components/threejs/BackgroundCanvas'

export default function HomePage() {
  const [isModalShowing, setIsModalShowing] = useState(false)
  const [isSideMenuShowing, setIsSideMenuShowing] = useState(false)

  return (
    <>
      {/* <BackgroundCanvas /> */}

      <main className="w-full bg-black text-white font-sans">
        <nav className="fixed left-6 top-6 z-50 text-gray font-roboto text-2xl">
          <div className='flex'>

          </div>
        </nav>
        <HomeNav />
        <section id={SectionId.About} className="nav-section  grid grid-cols-12 grid-rows-12 items-center">
          <div>
            ABOUT
          </div>
          {/* 
          <div className='bg-teal col-start-3 z-10 col-span-3s row-start-2 row-span-12 w-full h-full '>
          </div> */}
          {/* Left Section */}
          {/* <div className="flex flex-col justify-start items-center col-start-3 col-span-8 p-10 row-start-2  row-span-10 h-full ">
            <div className="flex align-center justify-center mt-20">
              <div className="flex items-end space-x-2 text-8xl mr-10 mb-4">
                <span className="text-red font-bold">M</span>
                <span className="text-gray font-bold">AHAT</span>
                <span className="text-teal font-bold">W</span>
                <span className="text-gray font-bold">ORKS</span>
              </div>

            </div>


          </div> */}
          {/* <div className='flex min-w-[200px] mb-3'>
                <img src="/images/M_LLC_teal.png" className="w-10 mr-4 filter sepia"></img>
                <img src="/images/W_LLC_teal.png" className="w-10 filter grayscale "></img>
              </div> */}

          {/* <div className=" w-full p-12 text-2xl bg-red  row-start-6 col-start-4 col-span-8 text-gray mt-4">
            Hi, I’m Beni Mahat, a software developer with 4+ years of experience crafting user-friendly web applications. I love turning caffeine into clean code and big ideas into scalable solutions. Skilled in JavaScript, React, and Node.js, I’m always up for a tech challenge. Let’s connect: LinkedIn.
          </div> */}

          {/* <div>
              <button className='bg-orange font-bold text-black rounded px-4 py-2 mt-10 w-[200px]'>
                LinkedIn
              </button>
              <button className='bg-orange ml-4 font-bold text-black rounded px-4 py-2 mt-4 w-[200px]'>
                Contact Me
              </button>
            </div> */}

          {/* <div className="relative flex justify-center items-center col-start-8 col-span-4 row-start-9 row-span-3 ">
            <img src="/images/profilephoto.png" className="w-[600px] h-auto" alt="Profile" />
          </div> */}
        </section >


        <section id={SectionId.Skills} className="nav-section grid-rows-12 h-[100vh] w-full grid ">
          <div className='flex'>

            <div className='h-[300px] w-[50%] bg-red z-10'>

            </div>
            <div className='h-[300px] w-[50%] bg-teal z-10'>

            </div>
          </div>
          <TestimonialsMarquee />
          <TestimonialsMarquee isReversed className="mt-8" />

        </section>

        <section id={SectionId.Experience} className="nav-section  w-full "></section>
        <section id={SectionId.Projects} className="nav-section  w-full "></section>
        <section id={SectionId.Contact} className="nav-sectionß w-full "></section>

        <section
          className="nav-section relative flex  w-full flex-col items-center justify-center gap-8">
          <Button variant="filled" hoverEmoji="💚" onClick={() => setIsModalShowing(true)}>
            Open Modal
          </Button>

          <Button variant="filled" onClick={() => setIsSideMenuShowing(true)}>
            Open Menu
          </Button>
        </section>

        <Modal isShowing={isModalShowing} onClose={() => setIsModalShowing(false)} />

        <SideMenu isShowing={isSideMenuShowing} onClose={() => setIsSideMenuShowing(false)} />
      </main >
    </>
  )
}
