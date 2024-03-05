import FullScreenMenu from "../FullScreenMenu/FullScreenMenu";

const Menu = () => {
  return (
    <nav
      className="relative flex w-full flex-nowrap items-center justify-between bg-[#ece7e1] py-7 text-[text-[#1a1818] font-serif lg:flex-wrap lg:justify-start lg:py-4"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <ul
          className="list-style-none mr-auto flex flex-col lg:mt-1 lg:flex-row"
          data-te-navbar-nav-ref
        >
          <li
            className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
            data-te-nav-item-ref
          >
            <a
              className="hover:text-[#d4cfc9] text-3xl lg:px-2"
              aria-current="page"
              href="/"
              data-te-nav-link-ref
            >
              Front End designer
            </a>
          </li>
        </ul>
        <FullScreenMenu />
      </div>
    </nav>
  );
};

export default Menu;
