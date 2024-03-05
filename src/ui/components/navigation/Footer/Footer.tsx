import moment from "moment";

const Footer: React.FC = () => {
  const currentTime = moment().format("HH:mm");
  return (
    <div className="flex flex-row font-mono text-center pb-5 justify-between">
      <a
        href="mailto:nicolinalarsson1@gmail.com?subject=Lets work together!"
        className="pl-10 hover:text-[#d4cfc9] group transition duration-300"
      >
        Send me a message
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#d4cfc9]"></span>
      </a>
      <p className="pl-10">Copyright © Nicolina Larsson 2024</p>
      <p className="pr-10">Stockholm, Sweden ━ {currentTime}</p>
    </div>
  );
};

export default Footer;
