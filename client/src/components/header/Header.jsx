const Header = () => {
  return (
    <div>
      <div className="navbar font-semibold text-primary py-3 bg-primary-content bg-opacity-75 backdrop-blur-lg shadow-xl">
        
        <div className="navbar-start">
          <h3 className="text-2xl text-primary font-semibold">
            <a href="/" target="_self">
              R i c h y - D e v
            </a>
          </h3>
        </div>
        <div className="navbar-end">
          <a href="/admin" target="_self" className="text-teal border border-teal px-6 py-2 text-center">
            Admin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
