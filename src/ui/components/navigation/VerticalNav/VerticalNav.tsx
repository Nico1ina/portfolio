const VerticalNav = () => {
  return (
    <div>
      <ul
        className="w-[100vh] h-[45px] fixed text-black"
        style={{
          transform: "rotate(90deg)",
          transformOrigin: "",
        }}
      >
        <li>© 2024 / Nicolina Larsson</li>
      </ul>
    </div>
  );
};

export default VerticalNav;
