import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "News", href: "#news" },
  { name: "Leadership", href: "#leadership" },
  { name: "Operations", href: "#operations" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
];

export default function Home() {
  const newsItems = [
    {
      title: 'PUBLICATION OF SUCCESSFUL CANDIDATES FOR NIGERIAN NAVY BASIC TRAINING SCHOOL BATCH 37 TRAINING',
      date: '2024-03-20',
      image: '/images/news/training-batch-37.jpg',
      link: '/media/news/training-batch-37',
    },
    {
      title: 'COURTESY VISIT BY THE AFRICAN UNION COMMISSIONER FOR POLITICAL AFFAIRS PEACE AND SECURITY TO NAVAL HEADQUARTERS',
      date: '2024-03-19',
      image: '/images/news/au-commissioner-visit.jpg',
      link: '/media/news/au-commissioner-visit',
    },
    {
      title: 'THE CHIEF OF THE NAVAL STAFF ANNUAL RAMADAN IFTAR',
      date: '2024-03-18',
      image: '/images/news/ramadan-iftar.jpg',
      link: '/media/news/ramadan-iftar',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-navy-900 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Image src="/nigerian-navy-logo.png" alt="Nigerian Navy Logo" width={48} height={48} className="rounded-full bg-white p-1" />
            <span className="text-2xl font-bold tracking-wide">Nigerian Navy</span>
          </div>
          <div className="hidden md:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-blue-300 transition-colors font-medium">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="/images/hero-navy.jpg"
          alt="Nigerian Navy Fleet"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Nigerian Navy
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Protecting Nigeria's maritime interests and ensuring maritime security
              </p>
              <Link
                href="/about"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Command Philosophy Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Command Philosophy of the Chief of Naval Staff
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To Lead the Nigerian Navy with Integrity, Courage and Relentless Pursuit for Excellence Through Teamwork, Discipline and Human Capacity Building, Whilst Upholding the Highest Standards of Professionalism, Ethics and Respect for Human Rights.
            </p>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/media/news"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link
              href="/about/leadership"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Leadership</h3>
              <p className="text-gray-600">Meet our leadership team</p>
            </Link>
            <Link
              href="/media/photo-gallery"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Photo Gallery</h3>
              <p className="text-gray-600">View our latest photos</p>
            </Link>
            <Link
              href="/operations"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Operations</h3>
              <p className="text-gray-600">Learn about our operations</p>
            </Link>
            <Link
              href="/contact"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600">Get in touch with us</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="bg-navy-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Image src="/operations.jpg" alt="Operations" width={80} height={80} className="rounded mb-2" />
            <h4 className="font-bold text-lg mb-1">Operations</h4>
            <p className="text-center text-sm">Learn about our ongoing maritime security and humanitarian missions.</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/careers.jpg" alt="Careers" width={80} height={80} className="rounded mb-2" />
            <h4 className="font-bold text-lg mb-1">Careers</h4>
            <p className="text-center text-sm">Explore opportunities to serve and build a rewarding career in the Navy.</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/contact.jpg" alt="Contact" width={80} height={80} className="rounded mb-2" />
            <h4 className="font-bold text-lg mb-1">Contact</h4>
            <p className="text-center text-sm">Get in touch with the Nigerian Navy for inquiries and support.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-950 text-white text-center py-6 mt-8">
        &copy; {new Date().getFullYear()} Nigerian Navy. All rights reserved.
      </footer>
    </div>
  );
}
