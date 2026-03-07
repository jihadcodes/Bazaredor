import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("হোম");

  const links = ["হোম", "বাজারদর", "খবর", "যোগাযোগ"];

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm ">
      <div className="max-w-7xl mx-auto px-4 py-7 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13M7 13L5.4 5M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
          </div>
          <span className="text-gray-800 font-semibold text-xl tracking-tight">
            Bazardor Web
          </span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => setActive(link)}
                className={`text-[16px] font-medium transition-colors pb-0.5 ${
                  active === link
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <button className="bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] transition-colors text-white text-sm font-medium px-5 py-2 rounded-lg">
          লগইন
        </button>
      </div>
    </nav>
  );
}
