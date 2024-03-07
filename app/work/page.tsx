import Menu from '@/src/ui/components/navigation/Menu/Menu'

export default function Page() {
  return (
    <div className='bg-white w-screen h-screen font-mono'>
      <link rel='shortcut icon' type='image/x-icon' href='favicon.ico' />
      <div className=''>
        <Menu />
      </div>
      <div className='grid grid-cols-5 gap-4 text-center place-items-center h-screen border-t border-black'>
        <p>Heu</p>
        <p>Hey</p>
        <p>Blö</p>
      </div>
    </div>
  )
}
