import Menu from "@/src/ui/components/navigation/Menu/Menu";

export default function Home() {
  return (
    <main className="bg-[#ece7e1] max-w-100 max-h-100 flex flex-col border border-[#1a1818]">
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      <div className="flex flex-row justify-between">
        <div className="font-serif ml-10">
          <section className="text-[#1a1818]">
            <ul className="flex-col sans font-serif text-[190px]">
              <li className="tracking-widest hover:italic transition ease-in-out delay-150 hover:translate-x-10 duration-200">
                <a href="/work">━Work</a>
              </li>
              <li className="tracking-widest hover:italic transition ease-in-out delay-150 hover:translate-x-10 duration-200">
                <a href="/about">━About</a>
              </li>
              <li className="tracking-widest hover:italic transition ease-in-out delay-150 hover:translate-x-10 duration-200">
                <a href="mailto:nicolinalarsson1@gmail.com">━Contact</a>
              </li>
            </ul>
          </section>
        </div>
        <div className="text-[100px] mr-20 mt-10">
          <Menu />
        </div>
      </div>
    </main>
  );
}
