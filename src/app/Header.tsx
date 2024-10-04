import Image from "./background/page";
import Link from "next/link";

function Header() {
  return (

    

    
    <header className="flex justify-between">
      {/* Logo */}
      <div>
 
        <h2 className=" font text-3xl font-semibold"> My Website </h2>
      </div>

      {/* Links */}=
      <nav>
        <ul className="flex gap-x-6 bg-blue-200">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact</Link>
          </li>
          <li>
            <Link href="/background">Image</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;