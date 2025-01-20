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

            <main className="w-full pl-20 bg-[#01161e]  text-white font-sans flex">
                <div className='flex-1 '>
                    <div className="flex flex-col align-center sticky  top-20 left-0  ">
                        <div className="flex items-end space-x-2 text-5xl mr-10 mb-4">
                            <span className="text-teal font-bold mr-0">B<span className="text-gray font-bold">ENI</span></span>
                            <span className="text-red font-bold">M<span className="text-gray font-bold">AHAT</span></span>
                        </div>

                        <span className='text-xl'>Full Stack Engineer</span>
                        <p className='max-w-[350px] mt-4 font-thin mb-10'>From front-end finesse to back-end brilliance, I build the web from top to bottom</p>
                        <HomeNav />
                    </div>

                </div>

                <div className='flex-1 mt-20 '>
                    <section id={SectionId.About} className="nav-section h-[700px]">About</section>
                    <section id={SectionId.Experience} className="nav-section h-[700px]">Experience</section>
                    <section id={SectionId.Skills} className="nav-section h-[700px]">Skills</section>
                    <section id={SectionId.Projects} className="nav-section h-[700px]">Projects</section>
                    <section id={SectionId.Contact} className="nav-section h-[700px]">Contact</section>

                </div>

            </main >
        </>
    )
}
