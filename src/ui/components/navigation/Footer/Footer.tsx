import moment from 'moment'

const Footer: React.FC = () => {
  const currentTime = moment().format('HH:mm')
  return (
    <div className='flex flex-col justify-center bg-[#1e1e21] text-[#f5f3ef]'>
      <div className='flex justify-center w-full container'>
        <button className='group relative inline-flex items-center overflow-hidden rounded-full border border-[#f5f3ef] px-12 py-3 text-lg text-[#f5f3ef] hover:text-[#d4cfc9] visible sm:visible md:visible lg:invisible w-[180px] mt-10'>
          <span className='duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-[#1e1e21] opacity-100 transition-all group-hover:top-0 group-hover:h-full'></span>
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
      </div>
      <div className='flex flex-col md:flex-col lg:flex-row text-center pb-5 justify-between'>
        <a
          href='mailto:nicolinalarsson1@gmail.com?subject=Lets work together!'
          className='invisible md:invisible lg:visible pl-10 group transition duration-300'
        >
          Send me a message →
          <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#bfbab4]'></span>
        </a>
        <p>Copyright © Nicolina Larsson 2024</p>
        <a
          href='#hero'
          className='invisible md:invisible lg:visible group transition duration-300 pr-10 mb-10'
        >
          Scroll to top ↑
          <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#bfbab4]'></span>
        </a>
      </div>
    </div>
  )
}

export default Footer
