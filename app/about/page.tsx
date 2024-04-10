'use client'
import FullScreenMenu from '@/src/ui/components/navigation/FullScreenMenu/FullScreenMenu'
import { useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import ButtonFilled from '@/src/ui/components/ButtonFilled/ButtonFilled'
import ButtonOutlined from '@/src/ui/components/ButtonOutlined/ButtonOutlined'
import RevealOnScroll from '@/src/ui/components/RevealOnScroll/RevealOnScroll'

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
              <h3 className='overflow-hidden text-3xl font-thin mb-2 animate-slidein opacity-0 [--slidein-delay:300ms]'>
                (About me)
              </h3>
              <h1 className='text-7xl lg:text-9xl tracking-wide animate-slidein opacity-0 [--slidein-delay:500ms]'>
                Nicolina <br /> Larsson
                <span className='text-[#1a1818] hover:text-[#daa520] text-lg animate-slidein opacity-0 [--slidein-delay:500ms]'>
                  ☻
                </span>
              </h1>
              <h2 className='text-3xl lg:text-5xl font-thin pt-5 animate-slidein opacity-0 [--slidein-delay:700ms]'>
                A Stockholm based Front End Developer with a Passion for
                Captivating Visual Experiences.
              </h2>
              <p className='text-lg pt-10 pb-10 font-thin animate-slidein opacity-0 [--slidein-delay:900ms]'>
                As a passionate front end developer, I specialize in modular
                development, focusing on creating reactive and digitally
                accessible UI components. My expertise lies in leveraging design
                systems to craft intuitive and accessible interfaces. My journey
                in the tech world began with a bachelors degree at EduGrade,
                where I honed my skills in back end / Java with a focus on
                object-oriented programming, REST APIs, and databases. This
                foundation was crucial in my transition to modern web
                technologies, including React, TypeScript, Next.js, and Apollo
                GraphQL.
                <br />
                <br />
                My professional experience is marked by a deep commitment to
                agile methodologies, particularly Scrum, which I believe are
                essential for fostering innovation and collaboration within a
                team. I&apos;ve had the privilege of working closely with
                designers, developers, and product owners to ensure our
                solutions are not only innovative but also aligned with industry
                standards. My contributions to Youwe Agencys Headless
                Accelerator project are a testament to my dedication to rigorous
                testing, component development, and integration with design
                systems to deliver visually appealing, technically sound,
                accessible, and user-friendly solutions.
                <br />
                <br />
                Throughout my career, I&apos;ve produced stories and
                documentation in Storybook, showcasing my ability to communicate
                complex technical concepts in an accessible manner. I&apos;m
                always eager to explore new technologies and methodologies,
                driven by a desire to push the boundaries of what&apos;s
                possible in web development. My goal is to continue contributing
                to projects that challenge me, inspire me and ultimately make a
                positive impact on users and the industry.
              </p>
              <div className='flex gap-2 mb-5 font-thin'>
                <RevealOnScroll>
                  <ButtonFilled />
                </RevealOnScroll>
                <RevealOnScroll>
                  <ButtonOutlined />
                </RevealOnScroll>
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
