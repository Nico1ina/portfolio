'use client'
import Menu from '@/src/ui/components/navigation/Menu/Menu'
import Footer from '@/src/ui/components/navigation/Footer/Footer'
import { useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import RevealOnScroll from '@/src/ui/components/RevealOnScroll/RevealOnScroll'
import Instagram from '@/src/ui/components/Icons/Instagram'
import LinkedIn from '@/src/ui/components/Icons/LinkedIn'
import Github from '@/src/ui/components/Icons/Github'

export default function Home() {
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
      <main className='bg-[#f5f3ef] min-h-screen text-[#1a1818]'>
        <section id='hero' className='flex flex-col overflow-hidden relative'>
          <Menu />
          <div className='mx-5'>
            <h1 className='text-4xl sm:text-5xl md:text-7xl lg:text-9xl animate-slidein opacity-0 [--slidein-delay:300ms] tracking-tight'>
              Nicolina Larsson
              <br />
              <span className='animate-slidein opacity-0 [--slidein-delay:500ms]'>
                Front End Developer
              </span>
            </h1>
            <div className='flex flex-row justify-between mb-5 sm:mb-10'>
              <p className='text-xs sm:text-xl md:text-3xl font-thin animate-slidein opacity-0 [--slidein-delay:500ms]'>
                (Stockholm, Sweden)
              </p>
              <a
                href='#about'
                data-twe-smooth-scroll-init
                className='text-3xl font-thin mr-5 animate-slidein opacity-0 [--slidein-delay:500ms] group transition duration-500 invisible lg:visible'
              >
                ↓ Scroll down
                <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#1a1818]'></span>
              </a>
            </div>
          </div>
        </section>
        <section
          id='image'
          className='bg-hero-pattern sm:bg-nico-pattern h-lvh sm:bg-fixed bg-cover'
        ></section>
        <section
          id='about'
          className='flex flex-col sm:grid sm:grid-cols-[2fr_1fr] my-10 font-thin'
        >
          <h2 className='order-last sm:order-first sm:border-r-2 border-black block overflow-hidden text-2xl md:text-3xl sm:m-0 mx-10 lg:px-10'>
            <RevealOnScroll>
              I&apos;m a Front End Developer (former Back End) with a passion
              for captivating visual and user friendly experiences. Currently
              based in Stockholm, Sweden.{' '}
              <span className='text-sm italic'>
                (
                <a href='/about' className='hover:underline'>
                  Read more
                </a>
                )
              </span>
            </RevealOnScroll>
          </h2>
          <div className='flex flex-col justify-between'>
            <div className='text-2xl ml-4 md:ml-10'>
              <RevealOnScroll>
                <span className='invisible sm:visible'>←</span> About me{' '}
                <span className='visible sm:invisible'>↓</span>
              </RevealOnScroll>
            </div>
            <div className='flex flex-row gap-x-1 ml-11 sm:ml-9 mb-10 sm:mb-0'>
              <RevealOnScroll>
                <a
                  href='https://www.linkedin.com/in/nicolina-larsson-8434a5206/'
                  target='_blank'
                >
                  <LinkedIn />
                </a>
              </RevealOnScroll>
              <RevealOnScroll>
                <a href='https://github.com/Nico1ina' target='_blank'>
                  <Github />
                </a>
              </RevealOnScroll>
              <RevealOnScroll>
                <a href='https://www.instagram.com/nihaolina/' target='_blank'>
                  <Instagram />
                </a>
              </RevealOnScroll>
            </div>
          </div>
        </section>
        <hr className='border-t-2 border-[#1a1818] my-8' />
        <section
          id='work'
          className='flex flex-col sm:grid sm:grid-cols-[1fr_2fr] mx-10 font-thin'
        >
          <div className='flex flex-col justify-between'>
            <div className='text-2xl mt-5 md:mt-0 mb-10 sm:mb-0'>
              <RevealOnScroll>
                <span className='visible sm:invisible'>↓&nbsp;</span>
                What I do <span className='invisible sm:visible'>↘</span>
              </RevealOnScroll>
            </div>
          </div>
          <RevealOnScroll>
            <h2 className='block text-2xl md:text-3xl overflow-hidden sm:border-l-2 mb-8 border-black sm:px-10'>
              As a passionate front end developer, I specialize in modular
              development, focusing on creating reactive and digitally
              accessible UI components. My expertise lies in leveraging design
              systems to craft intuitive and accessible interfaces.
              <br />
              <br />
              My journey in the tech world began with a bachelors degree at
              EduGrade, where I honed my skills in back end / Java with a focus
              on object-oriented programming, REST APIs, and databases. This
              foundation was crucial in my transition to modern web
              technologies, including React, TypeScript, Next.js, and Apollo
              GraphQL.{' '}
              <span className='text-sm italic'>
                (
                <a href='/work' className='hover:underline'>
                  Read more
                </a>
                )
              </span>
            </h2>
          </RevealOnScroll>
        </section>
        <Footer />
      </main>
    </>
  )
}
