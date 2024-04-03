'use client'
import FullScreenMenu from '@/src/ui/components/navigation/FullScreenMenu/FullScreenMenu'
import { useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

export default function Page() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
  return (
    <>
      <main className='relative flex h-full bg-[#f5f3ef] scroll-smooth'>
        <div className='flex flex-col h-full relative'>
          <div className='right-0 fixed z-10 flex flex-row justify-between pt-4'>
            <FullScreenMenu />
          </div>
          <div className='flex flex-col lg:grid lg:grid-cols-2 h-full'>
            <div className='px-5 sm:px-20 pt-10 sm:pt-20'>
              <h3 className='overflow-hidden text-3xl mb-2 animate-slidein opacity-0 [--slidein-delay:300ms]'>
                (About me)
              </h3>
              <h1 className='text-7xl lg:text-9xl tracking-wide animate-slidein opacity-0 [--slidein-delay:500ms]'>
                Nicolina <br /> Larsson
                <span className='text-[#1a1818] text-lg hover:text-[#daa520] text-center animate-slidein opacity-0 [--slidein-delay:500ms]'>
                  ☻
                </span>
              </h1>
              <h2 className='text-3xl lg:text-5xl pt-5 animate-slidein opacity-0 [--slidein-delay:500ms]'>
                A Stockholm based Front End Developer with a Passion for
                Captivating Visual Experiences.
              </h2>
              <p className='text-lg pt-10 pb-10 animate-slidein opacity-0 [--slidein-delay:700ms]'>
                As a digital designer and art director, I am passionate about
                creating captivating visual experiences that leave a lasting
                impression. Based in Berlin, I draw inspiration from the citys
                vibrant energy and dynamic creative scene. With years of
                experience in the industry, I have honed my skills in digital
                design, art direction, interaction design, and motion design.
                <br />
                <br />
                As a digital designer and art director, I am passionate about
                creating captivating visual experiences that leave a lasting
                impression. Based in Berlin, I draw inspiration from the citys
                vibrant energy and dynamic creative scene. With years of
                experience in the industry, I have honed my skills in digital
                design, art direction, interaction design, and motion design.
                <br />
                <br />
                As a digital designer and art director, I am passionate about
                creating captivating visual experiences that leave a lasting
                impression. Based in Berlin, I draw inspiration from the citys
                vibrant energy and dynamic creative scene. With years of
                experience in the industry, I have honed my skills in digital
                design, art direction, interaction design, and motion design.
              </p>
              <div className='flex gap-2 mb-5'>
                <button className='group relative inline-flex items-center overflow-hidden rounded-full border border-[#1a1818] bg-[#1a1818] text-[#ece7e1] px-12 py-3 text-sm md:text-md lg:text-lg hover:text-[#1a1818]'>
                  <span className='duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-[#f5f3ef] opacity-100 transition-all group-hover:top-0 group-hover:h-full'></span>
                  <span className='ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-500 group-hover:-translate-x-2'>
                    <svg
                      className='h-5 w-5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1'
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      ></path>
                    </svg>
                  </span>
                  <span className='relative transform duration-700 group-hover:-translate-x-3'>
                    <a
                      className='focus:outline-none'
                      href='mailto:nicolinalarsson1@gmail.com?subject=Lets work together!'
                    >
                      CONTACT
                    </a>
                  </span>
                </button>
                <button className='group relative inline-flex items-center overflow-hidden rounded-full border border-[#1a1818] px-12 py-3 text-sm md:text-md lg:text-lg text-[#1a1818]'>
                  <span className='duration-400 ease absolute left-0 top-1/2 block h-0 w-full opacity-100 transition-all group-hover:top-0 group-hover:h-full'></span>
                  <span className='ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-500 group-hover:-translate-x-2'>
                    <svg
                      className='h-5 w-5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1'
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      ></path>
                    </svg>
                  </span>
                  <span className='relative transform duration-700 group-hover:-translate-x-3 font-mono'>
                    <a
                      className='focus:outline-none'
                      href='./directory/yourfile.pdf'
                      download
                    >
                      {/* TODO: Add pdf to this button*/}
                      RESUME PDF
                    </a>
                  </span>
                </button>
              </div>
            </div>
            <div className='overflow-hidden order-first lg:order-last'>
              <img
                className='h-hlv lg:h-screen lg:fixed top-0 animate-slidein opacity-0 [--slidein-delay:300ms]'
                src='https://media.licdn.com/dms/image/D4D03AQG40y1wkBFb1Q/profile-displayphoto-shrink_800_800/0/1677610358836?e=2147483647&v=beta&t=QfUw8q2KBRhnQwq1jduNkJ18hMCFeSBzagebX0GdkZk'
                alt=''
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
