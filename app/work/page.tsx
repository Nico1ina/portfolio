import FullScreenMenu from '@/src/ui/components/navigation/FullScreenMenu/FullScreenMenu'
import { ArcCard } from '@/src/ui/components/navigation/CardTwo'

export default function Page() {
  return (
    <div className='relative flex h-screen bg-[#f5f3ef] justify-center'>
      <link rel='shortcut icon' type='image/x-icon' href='favicon.ico' />
      <div className='right-0 fixed z-10 flex flex-row justify-between pt-4'>
        <FullScreenMenu />
      </div>
      <div className='flex flex-col md:flex-row items-center gap-y-10 md:gap-x-10 mt-10'>
        <div className='md:absolute md:left-12 md:top-25'>
          <ArcCard
            name='Youwe Agency'
            title='Bla bla bla'
            since='nov 23 - april 24'
          />
        </div>
        <div className='md:absolute md:right-25 md:top-25'>
          <ArcCard
            name='Edugrade'
            title='Bla bla bla'
            since='sep 22 - may 24'
          />
        </div>
        <div className='md:absolute md:-bottom-1/4'>
          <a href='https://github.com/Nico1ina' target='_blank'>
            <ArcCard
              name='GitHub'
              title='A display of various projects exploring various technologies - both Front end and Back end.'
              since='sep 22 - ongoing'
            />
          </a>
        </div>
        <div className=''>
          <ArcCard
            name='Edugrade 2'
            title='Bla bla bla'
            since='sep 22 - may 24'
          />
        </div>
        <div className=''>
          <ArcCard
            name='Edugrade 3'
            title='Bla bla bla'
            since='sep 22 - may 24'
          />
        </div>
      </div>
    </div>
  )
}
