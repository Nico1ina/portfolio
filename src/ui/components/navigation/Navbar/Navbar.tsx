import Link from "next/link";

const Navbar = () => {
  return (
    <ul className="w-full top-0 container mx-auto px-4 h-full flex flex-row justify-between md:flex gap-x-6 text-black border-b">
      <li>
        <Link href="/about">
          <p>Nicolina Homepage</p>
        </Link>
      </li>
      <li>
        <Link href="/services">
          <p>Services</p>
        </Link>
      </li>
      <li>
        <Link href="/contacts">
          <p>Contacts</p>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
