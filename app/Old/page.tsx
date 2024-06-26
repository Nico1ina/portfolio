import Menu from '@/src/ui/components/navigation/Menu/Menu'
import Footer from '@/src/ui/components/navigation/Footer/Footer'

export default function Home() {
  return (
    <div className='bg-[#f5f3ef] flex flex-col min-h-screen justify-between overflow-hidden relative'>
      <Menu />
      <h1
        className='flex relative w-full justify-center font-mono
before:absolute before:inset-0 before:animate-typewriter
before:bg-[#f5f3ef]
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
after:bg-[#1a1818] text-[30px] sm:text-[70px] md:text-[90px] lg:text-130 xl:text-[135px]'
      >
        Nicolina Larsson
      </h1>
      <Footer />
    </div>
  )
}
