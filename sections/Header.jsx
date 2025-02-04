import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-500">
            Sansnom Tech Solutions
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-300 hover:text-blue-500 transition-colors">Home</Link>
            <Link href="#services" className="text-gray-300 hover:text-blue-500 transition-colors">Services</Link>
            <Link href="#about" className="text-gray-300 hover:text-blue-500 transition-colors">About</Link>
            <Link href="#blogs" className="text-gray-300 hover:text-blue-500 transition-colors">Blogs</Link>
            <Link href="#careers" className="text-gray-300 hover:text-blue-500 transition-colors">Careers</Link>
            <Link href="#contact" className="text-gray-300 hover:text-blue-500 transition-colors">Contact</Link>
          </div>
          
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
