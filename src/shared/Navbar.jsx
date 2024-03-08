import { Link, NavLink, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { useState } from "react";
import AddblogsModal from "../Components/AddblogsModal";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const { user, logOut } = UseAuth({});
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    if (user) {
      setIsOpen(!isOpen);
    } else {
      navigate("/login");
    }
  };

  const navlist = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-green-500 font-medium"
            : "font-medium"
        }
      >
        Home
      </NavLink>
      <NavLink className="font-medium" onClick={handleOpen}>
        Add Blogs
      </NavLink>
      <NavLink
        to={"/all-blogs"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-green-500 font-medium"
            : "font-medium"
        }
      >
        All Blogs
      </NavLink>
      <NavLink
        to={"/featured-blogs"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-green-500 font-medium"
            : "font-medium"
        }
      >
        Featured Blogs
      </NavLink>
      <NavLink
        to={"/wishlist"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-green-500 font-medium"
            : "font-medium"
        }
      >
        Wishlist
      </NavLink>
    </>
  );
  return (
    <div className=" bg-black">
      <AddblogsModal isOpen={isOpen} setIsOpen={setIsOpen}></AddblogsModal>
      <div className="navbar max-w-[90rem] mx-auto md:py-5 px-0">
        <div className="navbar-start">
          <div className="hidden lg:flex">
            <ul className="flex items-center px-1 space-x-4 text-white">{navlist}</ul>
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <HiMenu color="white" size={20}/>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlist}
            </ul>
          </div>
        </div>
        <div className="navbar-end flex-1 mr-3 md:mr-0">
          {user ? (
            <div className="dropdown relative">
              <div tabIndex={0} role="button">
                <img
                  src={user?.photoURL}
                  alt="user-profile-image"
                  className="md:w-10 w-8 rounded-full ring-2 ring-green-500"
                />
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content absolute right-0 md:top-5 top-10 mt-3 z-[1] p-3 w-40 shadow bg-base-100 rounded-box"
              >
                <Link
                  onClick={logOut}
                  className="hover:bg-slate-200 rounded p-2 text-bold"
                >
                  Log out
                </Link>
                <Link className="hover:bg-slate-200 rounded p-2 text-bold">
                  Profile setting
                </Link>
              </ul>
            </div>
          ) : (
            <div className="space-x-3">
              <Link
                to={`/login`}
                className="py-2 px-3 bg-black font-bold text-white rounded-full"
              >
                Log in
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
