import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'About', submenu: ['Leadership', 'Vision and Mission', 'History', 'Commands'] },
    { title: 'Media', submenu: ['News', 'Photo Gallery', 'Videos', 'Publications', 'Downloads'] },
    { title: 'Operations', submenu: [] },
    { title: 'Archives', submenu: ['History', 'Past CNS', 'Ships'] },
    { title: 'Contact', submenu: [] },
  ];

  return (
    <nav className="bg-navy-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/navy-logo.png"
                alt="Nigerian Navy Logo"
                width={60}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <div className="ml-4">
              <h1 className="text-xl font-bold">Nigerian Navy</h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <div key={item.title} className="relative group">
                  <button className="px-3 py-2 rounded-md text-sm font-medium hover:bg-navy-dark">
                    {item.title}
                  </button>
                  {item.submenu.length > 0 && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                      <div className="py-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem}
                            href={`/${item.title.toLowerCase()}/${subItem.toLowerCase().replace(' ', '-')}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-navy-dark"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <div key={item.title}>
                <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-navy-dark">
                  {item.title}
                </button>
                {item.submenu.length > 0 && (
                  <div className="pl-4">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem}
                        href={`/${item.title.toLowerCase()}/${subItem.toLowerCase().replace(' ', '-')}`}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-navy-dark"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 