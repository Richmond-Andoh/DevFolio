const Header = () => {
  return (
    <div>
      <div className="navbar fixed font-semibold text-primary py-3 bg-primary-content bg-opacity-75 backdrop-blur-lg shadow-xl">
        {/* <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="navbar-start">
          <h3 className="text-2xl text-primary font-semibold">
            R i c h y - D e v
          </h3>
        </div>
        <div className="navbar-end">
          <button className="text-teal border border-teal px-6 py-2 text-center">
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
