import { BookOpen, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // Add this import

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavItems = [
    { label: 'About', href: '/about' }, // Add leading slash
    { label: 'Contact', href: '/contact' } // Add leading slash
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white border-b border-gray-200' : 'bg-white border-b border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center space-x-2"> {/* Make logo clickable */}
            <BookOpen className="h-6 w-6" />
            <span className="text-xl font-bold tracking-tight">lotustalents</span>
          </NavLink>

          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <NavLink // Change from <a> to <NavLink>
                key={item.label}
                to={item.href} // Change from href to "to"
                className={({ isActive }) => // Add active state styling
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-black font-semibold' : 'text-gray-700 hover:text-black'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100">
            {mainNavItems.map((item) => (
              <NavLink // Change from <a> to <NavLink>
                key={item.label}
                to={item.href} // Change from href to "to"
                className={({ isActive }) => // Add active state styling
                  `block py-3 text-sm font-medium transition-colors ${
                    isActive ? 'text-black font-semibold' : 'text-gray-700 hover:text-black'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;