import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="navbar justify-between bg-base-100">
        {/* logo and hamburger menu */}
        <div className="justify-start flex-shrink w-1/2">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn px-2 btn-ghost lg:hidden"
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="">Item 1</Link>
              </li>
              <li>
                <Link href="">Parent</Link>
                <ul className="p-2">
                  <li>
                    <Link href="">Submenu 1</Link>
                  </li>
                  <li>
                    <Link href="">Submenu 2</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="">Item 3</Link>
              </li>
            </ul>
          </div>
          <Link href={"/"} className="btn max-sm:px-2 btn-ghost text-xl">
            Bookshelf
          </Link>
        </div>
        {/* navigation lists */}
        <div className="navbar-center flex-grow min-w-0 hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="">Item 1</Link>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <Link href="">Submenu 1</Link>
                  </li>
                  <li>
                    <Link href="">Submenu 2</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="">Item 3</Link>
            </li>
          </ul>
        </div>

        {/* search and profile options */}
        <div className="flex-none justify-end flex-shrink w-1/2 sm:gap-2">
          {/* search icon */}
          <button className="btn sm:hidden btn-ghost w-12 h-8 btn-circle">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          {/* search field */}
          <div className="form-control max-sm:hidden">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn w-12 h-8 btn-ghost btn-circle"
            >
              <div className="indicator">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item z-0">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
                <p>Login</p>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link href="">Settings</Link>
              </li>
              <li>
                <Link href="">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
