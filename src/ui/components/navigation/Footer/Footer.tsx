import moment from "moment";

const Footer: React.FC = () => {
  const currentTime = moment().format("HH:mm");
  return (
    <div className="flex flex-col justify-center font-mono">
      <button className="visible sm:visible md:visible lg:invisible rounded-full border border-[#1a1818] bg-[#ece7e1] p-2 text-[#1a1818] transition delay-150 duration-200 ease-in-out hover:translate-x-1 hover:scale-110 focus:outline-white focus:ring focus:ring-[#d4cfc9]">
        <a
          className="focus:outline-none"
          href="mailto:nicolinalarsson1@gmail.com?subject=Lets work together!"
        >
          CONTACT
        </a>
      </button>
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
