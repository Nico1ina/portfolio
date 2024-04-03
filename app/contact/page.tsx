import FullScreenMenu from '@/src/ui/components/navigation/FullScreenMenu/FullScreenMenu'

export default function Page() {
  return (
    <>
      <main className='relative flex h-full bg-[#f5f3ef] scroll-smooth'>
        <div className='right-0 absolute z-10 flex flex-row justify-between pt-4'>
          <FullScreenMenu />
        </div>
        <div className='flex flex-col lg:grid lg:grid-cols-2'>
          <div className='px-10 pt-10 sm:pt-20 order-last overflow-hidden'>
            <h3 className='text-3xl mb-2 animate-slidein opacity-0 [--slidein-delay:300ms]'>
              (Contact)
            </h3>
            <h1 className='text-7xl lg:text-9xl tracking-wide animate-slidein opacity-0 [--slidein-delay:500ms]'>
              Lets get <br /> in touch
              <span className='text-[#1a1818] text-lg hover:text-[#daa520] text-center animate-slidein opacity-0 [--slidein-delay:500ms]'>
                ☻
              </span>
            </h1>
            <div className='flex flex-col mr-20 animate-slidein opacity-0 [--slidein-delay:700ms]'>
              <div className='w-1/2'>
                <label
                  htmlFor='name'
                  className='leading-7 text-sm text-gray-600'
                >
                  Name:
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full bg-[#e4e1da] border border-#e4e1da] focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-1/2'>
                <label
                  htmlFor='email'
                  className='leading-7 text-sm text-gray-600'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full bg-[#e4e1da] border border-[#e4e1da] focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-1/2 flex flex-col'>
                <label
                  htmlFor='message'
                  className='leading-7 text-sm text-gray-600'
                >
                  Message:
                </label>
                <textarea
                  id='message'
                  name='message'
                  className='bg-[#e4e1da] border border-#e4e1da] focus:border-black h-32 text-base outline-none text-gray-700 py-1 px-3 mb-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                ></textarea>
              </div>
            </div>
            <button
              tabIndex={0}
              className='group relative inline-flex items-center overflow-hidden rounded-full border border-[#1a1818] bg-[#1a1818] text-[#ece7e1] px-12 py-3 text-sm md:text-md lg:text-lg hover:text-[#1a1818] animate-slidein opacity-0 [--slidein-delay:900ms]'
            >
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
                <a className='focus:outline-none' href=''>
                  SEND MESSAGE
                </a>
              </span>
            </button>
          </div>
          <div className='overflow-hidden order-first'>
            <img
              className='h-hlv lg:h-screen lg:fixed top-0 animate-slidein opacity-0 [--slidein-delay:300ms]'
              src='https://media.licdn.com/dms/image/D4D03AQG40y1wkBFb1Q/profile-displayphoto-shrink_800_800/0/1677610358836?e=2147483647&v=beta&t=QfUw8q2KBRhnQwq1jduNkJ18hMCFeSBzagebX0GdkZk'
              alt=''
            />
          </div>
        </div>
      </main>
    </>
  )
}
