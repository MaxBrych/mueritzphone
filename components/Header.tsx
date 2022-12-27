import Link from "next/link";
import { BiHomeAlt, BiGridAlt, BiCollection } from "react-icons/bi";
import { HiMenuAlt4 } from "react-icons/hi";
import Image from "next/image";

const style = { color: "white", size: "1.5rem" };

function Header() {
  return (
    <div className="fixed top-0 z-50 w-full md:static">
      <nav className="flex items-center justify-between h-16 px-4 text-gray-900 bg-white border-b-2 border-gray-200 md:px-16 ">
        <Link href="/">
          <Image src="/../public/Logo.png" alt="Logo" width={112} height={16} />
        </Link>
        <HiMenuAlt4 style={style} className="invisible" />
        <ul className="flex items-center">
          <li>
            <Link href="/" className="py-1 rounded-full hover:bg-gray-100">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Dienstleistungen"
              className="px-3 py-1 rounded-full hover:bg-gray-100"
            >
              Dienstleistungen
            </Link>
          </li>
          <li>
            <Link
              href="./blog"
              className="px-3 py-1 rounded-full hover:bg-gray-100"
            >
              Blog
            </Link>
          </li>
        </ul>
        {/* Nav links go here */}
      </nav>
    </div>
  );
}

export default Header;
