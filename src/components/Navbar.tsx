import React from 'react';

interface NavbarProps {
  theme: 'dark' | 'light';
}

const Navbar: React.FC<NavbarProps> = ({ theme }) => {
  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-800';
  const hoverColor = 'hover:text-[#a084fa]';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent border-b border-[#a084fa]/20 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <span
          className={`flex items-center gap-2 text-2xl font-extrabold ${textColor} tracking-wide drop-shadow cursor-pointer ${hoverColor} transition-colors duration-200`}
          onClick={handleBrandClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="#a084fa" viewBox="0 0 24 24" className="w-8 h-8"><path d="M10.25 2.75A2.25 2.25 0 0 0 8 5v1H6.25A2.25 2.25 0 0 0 4 8.25v9.5A2.25 2.25 0 0 0 6.25 20h11.5A2.25 2.25 0 0 0 20 17.75v-9.5A2.25 2.25 0 0 0 17.75 6H16V5a2.25 2.25 0 0 0-2.25-2.25h-3.5zm5.25 3.25V5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75v1h5zm-9.25 2.5a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 .75.75v1.25h-14.5V8.5zm0 2.75h14.5v6.5a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1-.75-.75v-6.5z"/></svg>
          Babar's Portfolio
        </span>
        <ul className="flex gap-6 text-gray-500 font-medium">
          <li>
            <a 
              href="#hero" 
              onClick={(e) => handleNavLinkClick(e, 'hero')}
              className="hover:text-[#a084fa] transition-colors duration-200 cursor-pointer"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={(e) => handleNavLinkClick(e, 'about')}
              className="hover:text-[#a084fa] transition-colors duration-200 cursor-pointer"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              onClick={(e) => handleNavLinkClick(e, 'experience')}
              className="hover:text-[#a084fa] transition-colors duration-200 cursor-pointer"
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#tech" 
              onClick={(e) => handleNavLinkClick(e, 'tech')}
              className="hover:text-[#a084fa] transition-colors duration-200 cursor-pointer"
            >
              Tech
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              onClick={(e) => handleNavLinkClick(e, 'projects')}
              className="hover:text-[#a084fa] transition-colors duration-200 cursor-pointer"
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleNavLinkClick(e, 'contact')}
              className="hover:text-[#a084fa] transition-colors duration-200 cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
