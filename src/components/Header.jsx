const Header = () => {
  return (
    <header className="navbar bg-sky-700 text-white px-5 sm:px-20">
      <div className="flex-1">
        <a className="text-xl font-bold capitalize">NexGen</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-hover">
          <div tabIndex="0" role="button" className="btn btn-ghost m-1">
            About Us
          </div>
          <ul
            tabIndex="0"
            className="dropdown-content z-[1] menu p-2 shadow bg-slate-700 rounded-box w-52"
          >
            <li>
              <a>Our Team</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div tabIndex="0" role="button" className="btn btn-ghost m-1">
            Services
          </div>
          <ul
            tabIndex="0"
            className="dropdown-content z-[1] menu p-2 shadow bg-slate-700 rounded-box w-52"
          >
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Solutions</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <div className="btn btn-ghost">Login</div> | {'  '}
          <div className="btn btn-ghost">Register</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
