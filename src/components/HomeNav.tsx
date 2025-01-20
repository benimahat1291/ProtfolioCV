'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { type FC, useState } from 'react'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP)

// Video Tutorial:
// https://www.youtube.com/watch?v=ee1CcxRkplU&t=173s

// Steps
// 0. Install dependencies - gsap, @gsap/react
// 0. Register Plugins - ScrollTrigger, ScrollToPlugin, useGSAP
// 1. Define Section IDs
// 2. Add Sections with IDs and className "nav-section"
// 3. Map Section IDs to Nav Links
// 4. Setup Scroll Triggers to highlight active section
// 5. Setup Scroll Trigger to update scroll progress indicator
// 6. Handle mobile version

// Resources
// https://gsap.com/docs/v3/Plugins/ScrollTrigger/
// https://gsap.com/docs/v3/Plugins/ScrollToPlugin/

export enum SectionId {
  About = 'About',
  Experience = "Experience",
  Skills = 'Skills',
  Projects = 'Projects',
  Contact = 'Contact',
}

const HomeNav: FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.About)

  useGSAP(
    () => {
      const addScrollTriggersToSections = () => {
        const sections = gsap.utils.toArray('.nav-section') as HTMLElement[]
        sections.forEach((section, index) => {
          ScrollTrigger.create({
            trigger: section,
            start: 'top center  ',
            end: 'bottom center',
            onEnter: () => {
              setActiveSection(section.id as SectionId)
            },
            onEnterBack: () => {
              setActiveSection(section.id as SectionId)
            },
          })
        })
      }
      addScrollTriggersToSections()
    },
    { dependencies: [activeSection] },
  )

  useGSAP(
    () => {
      // Toggle link opacity based on the active section
      const matchMedia = gsap.matchMedia()
      matchMedia.add('(min-width: 640px)', () => {
        gsap.to('.nav-link', {
          opacity: (_, element: HTMLElement) => {
            const isActive = element.dataset.sectionId === activeSection
            return isActive ? 1 : 0.3
          },
          // x: (_, element: HTMLElement) => {
          //   const isActive = element.dataset.sectionId === activeSection
          //   return isActive ? 20 : 0 // Shift 20px to the right if active
          // },
        })

        gsap.to('.nav-link-bar', {
          opacity: (_, element: HTMLElement) => {
            const isActive = element.dataset.sectionId === activeSection
            return isActive ? 1 : 0.3
          },
          duration: 0.3,
        })
        gsap.to('.nav-link-bar', {
          width: (_, element: HTMLElement) => {
            const isActive = element.dataset.sectionId === activeSection
            return isActive ? "64px" : "32px"
          },
          duration: 0.3,
        })
      })
    },
    { dependencies: [activeSection] },
  )

  const indicatorHeight = 0

  useGSAP(() => {
    // Update scroll progress indicator
    const scrollBarHeight = document.getElementById('scroll-bar')?.getBoundingClientRect()?.height
    if (!scrollBarHeight) return
    gsap.to('#scroll-indicator', {
      y: scrollBarHeight - indicatorHeight,
      ease: 'none',
      scrollTrigger: {
        start: 0,
        end: 'max',
        scrub: true,
      },
    })
  }, [])

  const onLinkClick = (id: SectionId) => {
    gsap.to(window, { scrollTo: { y: `#${id}`, offsetY: 0 } })
  }

  console.log("active section", activeSection)

  return (
    <nav className="z-50   sm:top-[50px]   shadow-teal">

      {/* Links */}
      <div className="ml-4 flex flex-col gap-4 py-4 text-lg font-bold text-gray">
        {Object.values(SectionId).map((id) => (
          <div key={id} className='flex items-center'>
            <span className='nav-link-bar h-[2px] min-w-[32px] bg-white mr-2 opacity-30 '
              data-section-id={id}></span>
            <a

              data-section-id={id}
              className={'nav-link hidden cursor-pointer text-base opacity-30 sm:block'}
              onClick={() => onLinkClick(id)}>

              {id}
            </a>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default HomeNav
