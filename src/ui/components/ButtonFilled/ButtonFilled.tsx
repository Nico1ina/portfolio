import ArrowRight from '../Icons/ArrowRight'

const ButtonFilled = () => {
  return (
    <button className='group relative inline-flex items-center overflow-hidden rounded-full border border-[#1a1818] bg-[#1a1818] text-[#ece7e1] px-12 py-3 text-sm md:text-md lg:text-lg hover:text-[#1a1818]'>
      <span className='duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-[#f5f3ef] opacity-100 transition-all group-hover:top-0 group-hover:h-full'></span>
      <span className='ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-500 group-hover:-translate-x-2'>
        <ArrowRight />
      </span>
      <span className='relative transform duration-700 group-hover:-translate-x-3'>
        <a
          className='focus:outline-none'
          href='mailto:nicolinalarsson1@gmail.com?subject=Lets work together!'
        >
          {/* TODO: Add pdf to this button. Also make the text a prop so it's not hardcoded*/}
          CONTACT
        </a>
      </span>
    </button>
  )
}

export default ButtonFilled
