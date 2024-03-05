export default function Page() {
  return (
    <>
      <div className="flex flex-col">
        <a
          href="/"
          className="text-[#1a1818] hover:text-[#d4cfc9] pl-2 text-[30px]"
        >
          ←
        </a>
        <div className="mt-20 ml-20 font-mono text-[30px] text-[#1a1818]">
          <h2>
            Hello, my name is <span className="font-bold">Nicolina&nbsp;</span>
            and
          </h2>
        </div>
        <div className="flex flex-row text-[#1a1818]">
          <h1 className="z-20 ml-20 font-mono text-[24px] md:text-[48px] lg:text-[100px]">
            I AM A JUNIOR <br />
            FRONT END DEVELOPER
          </h1>
          <img
            className="absolute right-40 top-20 z-10 h-[100px] w-[100px] rounded-full md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px]"
            src="https://media.licdn.com/dms/image/D4D03AQG40y1wkBFb1Q/profile-displayphoto-shrink_800_800/0/1677610358836?e=2147483647&v=beta&t=QfUw8q2KBRhnQwq1jduNkJ18hMCFeSBzagebX0GdkZk"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[#1a1818] animate-bounce hover:text-[#daa520] text-center">
            ☻
          </span>
          <div className="flex">
            <div className="flex w-0 md:w-1/2" />
            <p className="flex justify-end pt-2 font-mono text-[#1a1818] md:w-1/2 pr-20">
              The cusp of art and technology has always fascinated me and I have
              never been afraid to just jump in and give it a go, whether it is
              Paint, Photoshop, Sketch or CSS. I’ve been designing with
              computers since the day I first opened Microsoft Paint. Fast
              forward to 2023 and I’ve tried it all, from Digital Campaign
              Design and Flash Actionscript to Web Design, Animation, HTML/CSS,
              No-Code Web Development, Product Design and Product Management.
            </p>
          </div>
          <div className="flex">
            <div className="flex w-0 md:w-1/2" />
            <div className="flex gap-4 font-mono pt-4">
              <button className="rounded-full border border-[#1a1818] bg-[#1a1818] p-2 text-[#ece7e1] transition delay-150 duration-200 ease-in-out hover:translate-x-1 hover:scale-110 focus:outline-none focus:ring focus:ring-[#d4cfc9]">
                <a
                  className="focus:outline-none"
                  href="mailto:nicolinalarsson1@gmail.com?subject=Lets work together!"
                >
                  CONTACT
                </a>
              </button>
              <button className="rounded-full border border-[#1a1818] p-2 text-[#1a1818] transition delay-150 duration-200 ease-in-out hover:translate-x-1 hover:scale-110 focus:outline-none focus:ring focus:ring-[#d4cfc9]">
                RESUME PDF
              </button>
              {/* This is how to add a download
                <a className="" href="./directory/yourfile.pdf" download>Download the pdf</a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
