import Menu from "@/src/ui/components/navigation/Menu/Menu";

export default function Home() {
  return (
    <main className="flex flex-col border border-[#1a1818] bg-[#ece7e1]">
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      <div className="flex flex-row justify-between">
        <div className="ml-10 font-serif">
          <section className="text-[#1a1818]">
            <ul className="sans flex-col font-serif text-[190px]">
              <li className="tracking-widest transition delay-150 duration-200 ease-in-out hover:translate-x-10 hover:italic">
                <a href="/work">━Work</a>
              </li>
              <li className="tracking-widest transition delay-150 duration-200 ease-in-out hover:translate-x-10 hover:italic">
                <a href="/about">━About</a>
              </li>
              <li className="tracking-widest transition delay-150 duration-200 ease-in-out hover:translate-x-10 hover:italic">
                <a href="mailto:nicolinalarsson1@gmail.com">━Contact</a>
              </li>
            </ul>
          </section>
        </div>
        <div className="mr-20 mt-10 text-[100px]">
          <Menu />
        </div>
      </div>
    </main>
  );
}
