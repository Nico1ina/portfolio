const Footer = () => {
  return (
    <div className="flex flex-row font-mono text-center pb-5 justify-between">
      <a
        href="mailto:nicolinalarsson1@gmail.com?subject=Lets work together!"
        className="pl-10 underline hover:text-[#d4cfc9]"
      >
        Send me a message
      </a>
      <p>Copyright © Nicolina Larsson 2024</p>
      <p className="pr-10">Stockholm, Sweden</p>
    </div>
  );
};

export default Footer;
