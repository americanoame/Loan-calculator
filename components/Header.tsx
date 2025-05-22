const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-[80px] bg-white text-gray-800 dark:bg-gray-900 dark:text-white shadow">
      <div className="px-4 md:px-8 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="text-xl font-bold">HWLoans</div>

        {/* Navigation Links */}
        <nav className="flex items-center text-[14px] font-bold space-x-6">
          <a href="#" className="hover:text-blue-600 transition">
            BUYING
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            REFINANCING
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            CALCULATOR
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            ABOUT US
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            CONTACT US
          </a>
          <a
            href="tel:1234567890"
            className="bg-amber-50 rounded-3xl text-blue-700 px-4 py-2 hover:bg-blue-700 transition"
          >
            📞 (123) 456-7890
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
