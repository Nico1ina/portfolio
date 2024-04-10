'use client'
import Menu from '@/src/ui/components/navigation/Menu/Menu'
import Footer from '@/src/ui/components/navigation/Footer/Footer'
import { useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import RevealOnScroll from '@/src/ui/components/RevealOnScroll/RevealOnScroll'

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
          <h2 className='order-last sm:order-first sm:border-r-2 border-black block overflow-hidden text-3xl lg:text-3xl sm:m-0 mx-10 lg:px-10'>
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
            {/*TODO: Create separate files for each SVG and import them that way*/}
            <div className='flex flex-row gap-x-1 ml-11 sm:ml-9 mb-10 sm:mb-0'>
              <RevealOnScroll>
                <a
                  href='https://www.linkedin.com/in/nicolina-larsson-8434a5206/'
                  target='_blank'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='17'
                    height='17'
                    viewBox='0 0 24 24'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                  </svg>
                </a>
              </RevealOnScroll>
              <RevealOnScroll>
                <a href='https://www.instagram.com/nihaolina/' target='_blank'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='17'
                    height='17'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                  </svg>
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
            <div className='text-2xl mb-10 sm:mb-0'>
              <RevealOnScroll>
                <span className='visible sm:invisible'>↓&nbsp;</span>
                What I do <span className='invisible sm:visible'>↘</span>
              </RevealOnScroll>
            </div>
          </div>
          <RevealOnScroll>
            <h2 className='block text-3xl overflow-hidden sm:border-l-2 mb-8 border-black sm:px-10'>
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
