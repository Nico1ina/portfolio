import Menu from '@/src/ui/components/navigation/Menu/Menu'
import Footer from '@/src/ui/components/navigation/Footer/Footer'

export default function Home() {
  return (
    <div className='bg-[#ece7e1] flex flex-col min-h-screen justify-between overflow-hidden relative'>
      <Menu />
      <h1
        className='relative w-[max-content] font-mono
before:absolute before:inset-0 before:animate-typewriter
before:bg-[#ece7e1]
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
after:bg-[#1a1818] text-[40px] sm:text-[70px] md:text-[90px] lg:text-[135px] pl-10'
      >
        Nicolina Larsson
      </h1>
      <Footer />
    </div>
  )
}
