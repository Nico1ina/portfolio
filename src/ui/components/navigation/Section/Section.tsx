const Section = () => {
  return (
    <section className=" text-black font-bold sans font-serif">
      <div className="w-full h-full">
        <ul className="flex-col font-bold sans font-serif text-[190px]">
          <li className="">
            <a href="/work" className="">
              ━Work
            </a>
          </li>
          <li className="">
            <a href="/about" className="">
              ━About
            </a>
          </li>
          <li className="">
            <a
              href="mailto:nicolinalarsson1@gmail.com"
              className="hover:italic"
            >
              ━Contact
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Section;
