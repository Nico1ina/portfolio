import ArrowRight from '../Icons/ArrowRight'

const ButtonOutlined = () => {
  return (
    <button className='group relative inline-flex items-center overflow-hidden rounded-full border border-[#1a1818] px-12 py-3 text-sm md:text-md lg:text-lg text-[#1a1818]'>
      <span className='duration-400 ease absolute left-0 top-1/2 block h-0 w-full opacity-100 transition-all group-hover:top-0 group-hover:h-full'></span>
      <span className='ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-500 group-hover:-translate-x-2'>
        <ArrowRight />
      </span>
      <span className='relative transform duration-700 group-hover:-translate-x-3 font-mono'>
        <a
          className='focus:outline-none'
          href='/NicolinaLarsson.pdf'
          target='_blank'
          rel='noopener noreferrer'
        >
          RESUME PDF
        </a>
      </span>
    </button>
  )
}

export default ButtonOutlined
