const VerticalNav = () => {
  return (
    <div
      className="fixed bottom-2 right-0"
      style={{
        transform: "rotate(90deg)",
      }}
    >
      © 2024 / &nbsp;
      <a href="/about" className="hover:underline">
        Nicolina Larsson
      </a>
    </div>
  );
};

export default VerticalNav;
