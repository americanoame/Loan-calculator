
const Header = () => {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 w-full h-[80px] bg-white text-gray-800 dark:bg-gray-900 dark:text-white shadow">
        <div className="px-4 md:px-8 flex justify-between items-center h-full">
          {/* Logo */}
          <div className="text-xl font-bold">HWLoan</div>
  
          {/* Navigation Links */}
          <nav className="flex items-center space-x-6">
            <a href="#" className="hover:text-blue-600 transition">Buying</a>
            <a href="#" className="hover:text-blue-600 transition">Refinancing</a>
            <a href="#" className="hover:text-blue-600 transition">Calculator</a>
            <a href="#" className="hover:text-blue-600 transition">About Us</a>
            <a href="#" className="hover:text-blue-600 transition">Contact Us</a>
            <a
              href="tel:1234567890"
              className="bg-blue-600 rounded-3xl text-white px-4 py-2 hover:bg-blue-700 transition"
            >
              📞 (123) 456-7890
            </a>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  