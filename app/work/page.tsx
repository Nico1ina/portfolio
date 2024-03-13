import FullScreenMenu from '@/src/ui/components/navigation/FullScreenMenu/FullScreenMenu'

export default function Page() {
  return (
    <div className='relative flex h-screen font-mono bg-[#ece7e1]'>
      <link rel='shortcut icon' type='image/x-icon' href='favicon.ico' />
      <div className='absolute top-0 right-0 z-999'>
        <FullScreenMenu />
      </div>
      <div className='w-20 flex items-center justify-center'>
        <span className='-rotate-90 whitespace-nowrap text-6xl uppercase tracking-widest ml-3 invisible md:visible lg:visible xl:visible'>
          Nicolina Larsson
        </span>
      </div>
      <div className='flex-1 flex flex-col overlow-hidden'>
        <div className='h-10 flex items-center justify-center overflow-hidden'>
          <span className='tracking-widest text-xl uppercase'></span>
        </div>
        <div className='flex-1 flex flex-col'>
          <div className='h-1/2 grid grid-cols-2 '>
            <div className='flex justify-center overflow-hidden'>
              [This too will be an image]
            </div>
            <div className='flex justify-center overflow-hidden'>
              [This too will be an image]
            </div>
          </div>
          <div className='h-1/2 grid grid-cols-2'>
            <div className='flex justify-center overflow-hidden'>
              [This too will be an image]
            </div>
            <div className='flex justify-center overflow-hidden'>
              [This too will be an image]
            </div>
          </div>
        </div>
        <div className='h-10 flex flex-row items-center justify-center space-x-2'>
          <span className='font-bold tracking-widest text-sm md:text-xl lg:text-xl uppercase'>
            Want to know more?{' '}
          </span>
          <span className='tracking-widest text-sm md:text-xl lg:text-xl xl:text-xl font-thin uppercase'>
            <a
              href='mailto:nicolinalarsson1@gmail.com?subject=Lets work together!'
              className='hover:text-[#bfbab4] group transition duration-300'
            >
              Send me a message →
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#bfbab4]'></span>
            </a>
          </span>
        </div>
      </div>
      <div className='w-20 flex items-center justify-center'>
        <span className='rotate-90 whitespace-nowrap text-6xl uppercase tracking-widest mr-3 invisible md:visible lg:visible xl:visible'>
          Previous Work
        </span>
      </div>
    </div>
  )
}
