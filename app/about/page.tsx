export default function Page() {
  return (
    <>
      <body className="max-container padding-container bg-black relative">
        <div className="max-container padding-container w-full h-full bg-[#002FA7]">
          <a
            href="/"
            className="text-white hover:text-[#FFB6C1] pt-10 pl-2 text-[30px]"
          >
            ←
          </a>
          <div className="flex flex-col">
            <div className="flex flex-row pt-[80px] text-white space-x-[900px]">
              <div>
                <h1 className="absolute pl-[130px] pt-[40px] text-[100px] font-mono">
                  I AM A JUNIOR <br />
                  FRONT END DEVELOPER
                </h1>
              </div>
              <div>
                <img
                  className="w-[300px] h-[300px] rounded-full"
                  src="https://media.licdn.com/dms/image/D4D03AQG40y1wkBFb1Q/profile-displayphoto-shrink_800_800/0/1677610358836?e=2147483647&v=beta&t=QfUw8q2KBRhnQwq1jduNkJ18hMCFeSBzagebX0GdkZk"
                  alt=""
                />
              </div>
            </div>
            <p className="pl-[600px] pr-[250px] pt-10 block text-white font-mono pb-4 whitespace-wrap">
              <span className="text-[30px]">
                <span className="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-110 hover:text-[#FFFF00] duration-200">
                  ☻
                </span>
                <br />
              </span>
              <br />
              The cusp of art and technology has always fascinated me and I've
              never been afraid to just jump in and give it a go, whether it's
              Paint, Photoshop, Sketch or CSS. I’ve been designing with
              computers since the day I first opened Microsoft Paint. Fast
              forward to 2023 and I’ve tried it all, from Digital Campaign
              Design and Flash Actionscript to Web Design, Animation, HTML/CSS,
              No-Code Web Development, Product Design and Product Management.
            </p>
          </div>
          <div className="text-center p-3 font-mono text-white">
            <button className="border border-white  rounded-full p-2 mr-5 transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 duration-200 hover:text-[#002FA7] hover:bg-white focus:outline-none focus:ring focus:ring-[#FFB6C1]">
              <a href="mailto:nicolinalarsson1@gmail.com">CONTACT</a>{" "}
            </button>
            <button className="border border-white  rounded-full p-2 mr-5 transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 duration-200 hover:text-[#002FA7] hover:bg-white focus:outline-none focus:ring focus:ring-[#FFB6C1]">
              RESUME PDF{" "}
            </button>
          </div>
        </div>
      </body>
    </>
  );
}
