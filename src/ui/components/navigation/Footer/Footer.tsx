import moment from "moment";

const Footer: React.FC = () => {
  const currentTime = moment().format("HH:mm");
  return (
    <div className="flex flex-col justify-center font-mono">
      <div className="flex justify-center w-full">
        <button className="group relative inline-flex items-center overflow-hidden rounded-full border border-[#1a1818] px-12 py-3 text-lg text-[#1a1818] hover:text-[#d4cfc9] visible sm:visible md:invisible lg:invisible w-[180px]">
          <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-[#1a1818] opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
          <span className="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-500 group-hover:-translate-x-2">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative transform duration-700 group-hover:-translate-x-3 font-mono">
            <a
              className="focus:outline-none"
              href="mailto:nicolinalarsson1@gmail.com?subject=Lets work together!"
            >
              CONTACT
            </a>
          </span>
        </button>
      </div>
      <div className="flex flex-col md:flex-col lg:flex-row font-mono text-center pb-5 justify-between">
        <a
          href="mailto:nicolinalarsson1@gmail.com?subject=Lets work together!"
          className="invisible md:invisible lg:visible pl-10 hover:text-[#d4cfc9] group transition duration-300"
        >
          Send me a message →
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#d4cfc9]"></span>
        </a>
        <p>Copyright © Nicolina Larsson 2024</p>
        <p className="pr-10 invisible md:invisible lg:visible">
          Stockholm, Sweden ━ {currentTime}
        </p>
      </div>
    </div>
  );
};

export default Footer;
