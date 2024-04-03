import FullScreenMenu from '../FullScreenMenu/FullScreenMenu'

const Menu = () => {
  return (
    <div className='flex flex-row justify-between bg-[#f5f3ef] pt-4'>
      <div className='hover:text-[#d4cfc9] invisible text-3xl group transition duration-300 font-serif'>
        Front End Developer
        <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#d4cfc9]'></span>
      </div>
      <div className='flex flex-row gap-x-2 items-center justify-end'>
        <FullScreenMenu />
      </div>
    </div>
  )
}

export default Menu
