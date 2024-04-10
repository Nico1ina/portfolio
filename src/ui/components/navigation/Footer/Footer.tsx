import moment from 'moment'
import ArrowRight from '../../Icons/ArrowRight'

const Footer: React.FC = () => {
  const currentTime = moment().format('HH:mm')
  return (
    <div className='flex flex-col justify-center font-mono bg-[#1e1e21] text-[#f5f3ef] font-thin'>
      <div className='flex justify-center w-full container'>
        <button className='group relative inline-flex items-center overflow-hidden rounded-full border border-[#f5f3ef] px-12 py-3 text-lg text-[#f5f3ef] hover:text-[#d4cfc9] visible sm:visible md:visible lg:invisible w-[180px] mt-10'>
          <span className='duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-[#1e1e21] opacity-100 transition-all group-hover:top-0 group-hover:h-full'></span>
          <span className='ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-500 group-hover:-translate-x-2'>
            <ArrowRight />
          </span>
          <span className='relative transform duration-700 group-hover:-translate-x-3 font-mono'>
            <a
              className='focus:outline-none'
              href='mailto:nicolinalarsson1@gmail.com?subject=Lets work together!'
            >
              CONTACT
            </a>
          </span>
        </button>
      </div>
      <div className='flex flex-col lg:flex-row font-mono text-center pb-5 justify-between'>
        <a
          href='mailto:nicolinalarsson1@gmail.com?subject=Lets work together!'
          className='invisible lg:visible pl-10 group transition duration-300'
        >
          Send me a message →
          <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#bfbab4]'></span>
        </a>
        <p>Copyright © Nicolina Larsson 2024</p>
        <a
          href='#hero'
          className='invisible lg:visible group transition duration-300 pr-10 mb-10'
        >
          Scroll to top ↑
          <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#bfbab4]'></span>
        </a>
      </div>
      <ul className='flex flex-row gap-2 justify-center visible sm:invisible'></ul>
    </div>
  )
}

export default Footer
