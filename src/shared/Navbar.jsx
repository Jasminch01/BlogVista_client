import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlist = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-green-500 font-medium" : "font-medium"
        }
      >
        Home
      </NavLink>

      <NavLink
        to={"/add-blogs"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-green-500 font-medium" : "font-medium"
        }
      >
        Add Blogs
      </NavLink>

      <NavLink
        to={"/all-blogs"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-green-500 font-medium" : "font-medium"
        }
      >
        All Blogs
      </NavLink>
      <NavLink
        to={"/featured-blogs"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-green-500 font-medium" : "font-medium"
        }
      >
        Featured Blogs
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar max-w-7xl mx-auto py-5 absolute top-0 left-0 right-0 z-50">
        <div className="navbar-start md:w-[15%] w-[50%]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              {navlist}
            </ul>
          </div>
          <a className="text-2xl font-bold text-green-500">BlogVista</a>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center px-1 space-x-4">{navlist}</ul>
        </div>
        <div className="navbar-end flex-1">
          <div className="space-x-3">
            <NavLink
              to={`/login`}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "py-2 px-3 bg-black text-white rounded-full"
                  : ""
              }
            >
              Log in
            </NavLink>
            <NavLink
              to={`/sign-up`}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "py-2 px-3 bg-black text-white rounded-full"
                  : ""
              }
            >
              Sign up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
