import FullScreenMenu from '@/src/ui/components/navigation/FullScreenMenu/FullScreenMenu'

export default function Page() {
  return (
    <>
      <main className='relative flex h-full bg-[#f5f3ef] scroll-smooth'>
        <div className='flex flex-col h-full'>
          <div className='flex flex-col lg:grid lg:grid-cols-2 h-full'>
            <div className='px-20 pt-20'>
              <h3 className='overflow-hidden text-3xl mb-2 animate-slidein opacity-0 [--slidein-delay:300ms]'>
                (About me)
              </h3>
              <h1 className='text-7xl lg:text-9xl tracking-wide animate-slidein opacity-0 [--slidein-delay:500ms]'>
                Nicolina <br /> Larsson
              </h1>
              <h2 className='text-3xl lg:text-5xl pt-5 animate-slidein opacity-0 [--slidein-delay:500ms]'>
                A Stockholm based Front End Designer with a Passion for
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

;<section
  id='about'
  className='flex flex-col sm:grid sm:grid-cols-2 sm:m-10 md:m-10 lg:m-10'
>
  <h2 className='order-last sm:order-first md:order-first lg:order-first sm:border-r md:border-r lg:border-r border-black block text-6xl sm:text-7xl md:text-7xl lg:text-8xl overflow-hidden m-10 sm:m-0 md:m-0 lg:m-0'>
    I have always been driven to bla bla and I focus on producing top-notch
    stuff.
  </h2>
  <div className='flex flex-col justify-between'>
    <div className='text-4xl sm:ml-5 md:ml-5 lg:ml-5'>
      <span className='invisible sm:visible md:visible lg:visible'>←</span>{' '}
      About me{' '}
      <span className='visible sm:invisible md:invisible lg:invisible'>↓</span>
    </div>
    {/*TODO: Create separate files for each SVG and import them that way*/}
    <div className='flex flex-row gap-x-2 ml-10 sm:ml-5 md:ml-5 lg:ml-5'>
      <a
        href='https://www.linkedin.com/in/nicolina-larsson-8434a5206/'
        target='_blank'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='34'
          height='34'
          viewBox='0 0 24 24'
        >
          <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
        </svg>
      </a>
      <a href='https://www.instagram.com/nihaolina/' target='_blank'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='34'
          height='34'
          viewBox='0 0 24 24'
        >
          <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
        </svg>
      </a>
    </div>
  </div>
</section>
