const VerticalNav = () => {
  return (
    <div>
      <ul
        className="w-[100vh] h-[45px] fixed flex flex-row uppercase text-black right-100 bottom-100"
        style={{
          transform: "rotate(90deg)",
          transformOrigin: "",
        }}
      >
        <li>
          <a
            href="https://se.linkedin.com/in/nicolina-larsson-8434a5206"
            target="_blank"
          >
            ━LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/nihaolina/" target="_blank">
            ━Instagram{" "}
          </a>
        </li>
        <li>
          <a href="#">━PORTFOLIO </a>
        </li>
        <li>
          <a href="#">━RESUME </a>
        </li>
        <li>
          <a href="#">━CONTACT.....</a>
        </li>
        <li>©/2024</li>
      </ul>
    </div>
  );
};

export default VerticalNav;
