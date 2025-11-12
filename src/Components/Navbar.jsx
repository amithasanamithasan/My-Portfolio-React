import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Lottie from "lottie-react";
import Protfolio from "../assets/protfolio.json";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialMode =
      savedMode !== null ? savedMode === "true" : systemPrefersDark;
    setDarkMode(initialMode);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Apply dark mode class and save to localStorage
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skill" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-20 transition-all duration-300 ${
        scrolled
          ? "bg-green-200/70 dark:bg-gray-800/70 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
         
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <Lottie
                loop={true}
                animationData={Protfolio}
                className=" w-50 rounded-md   "
              />
              <span className="ml-3 text-xl font-semibold text-gray-900 dark:text-white hidden sm:block"></span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-yellow-400 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-1 py-2 text-sm font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
           <div className="flex items-center gap-2 lg:gap-4">
              <div className="bg-white/10 border hidden md:flex border-white/20 py-1.5 px-1.5 lg:px-2 rounded-md relative group overflow-hidden hover:shadow-md shadow-white/10 items-center justify-center">
                <div className="absolute top-0 -right-1/2 w-1/4 h-full bg-white/20 blur-sm group-hover:right-44 duration-700"></div>
              <a
                      href="https://drive.google.com/file/d/1LBMHWpTgTGkvCTcHYiU8JQRCHb5-SRl8/view?usp=sharing"
                      target="_blank"
                      className="py-2 lg:py-2.5 px-4 md:px-6 lg:px-8 rounded-lg text-sm  bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white relative group overflow-hidden inline-block"
                    >
                      <span className="relative z-10">Resume</span>
                      <span className="absolute top-0 w-1/4 h-full -left-24 bg-white/20 blur-sm group-hover:left-40 duration-1000 transition-all ease-out z-0"></span>
                    </a>
              </div>
              <div
                onClick={() => setMobileMenuOpen(true)}
                className="bg-white/10 border border-white/20 py-1.5 px-2 rounded-md relative group overflow-hidden hover:shadow-md shadow-white/10 lg:hidden flex items-center justify-center"
              >
                <div className="absolute top-0 -right-1/2 w-1/4 h-full bg-white/20 blur-sm group-hover:right-44 duration-700"></div>
                <a className="py-2 lg:py-2.5 px-4 md:px-6 lg:px-8 rounded-lg text-sm  bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white relative group overflow-hidden inline-block">
                  <span className="relative z-10">
                    <Menu className="text-xl" />
                  </span>
                  <span className="absolute top-0 w-1/4 h-full -left-24 bg-white/20 blur-sm group-hover:left-40 duration-1000 transition-all ease-out z-0"></span>
                </a>
              </div>
            </div>
          </nav>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-[#127fff] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#127fff] dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6 " aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
              <a
                      href="https://drive.google.com/file/d/1LBMHWpTgTGkvCTcHYiU8JQRCHb5-SRl8/view?usp=sharing"
                      target="_blank"
                      className="py-2 lg:py-2.5 px-4 md:px-6 lg:px-8 rounded-lg text-sm  bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white relative group overflow-hidden inline-block"
                    >
                      <span className="relative z-10">Resume</span>
                      <span className="absolute top-0 w-1/4 h-full -left-24 bg-white/20 blur-sm group-hover:left-40 duration-1000 transition-all ease-out z-0"></span>
                    </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
