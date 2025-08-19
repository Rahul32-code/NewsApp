const Header = () => {
  return (
    <header className="bg-white/70 shadow-md sticky top-0 z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 tracking-tight animate-fadeIn">
          📰 News Explorer
        </h1>
        <p className="text-gray-500 mt-2 text-base sm:text-lg">
          Stay updated with the latest headlines
        </p>
      </div>
    </header>
  );
};

export default Header;
