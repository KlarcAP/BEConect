import React, { useState, useEffect } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { IoSunny } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSidebar } from "../redux/slices/authSlice";
import UserAvatar from "./UserAvatar";
import NotificationPanel from "./NotificationPanel";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className='w-auto flex justify-between items-center bg-white dark:bg-gray-800 px-4 py-3 2xl:py-4 sticky z-10 top-0'>
      <div className='flex gap-4'>
        <button
          type="button"
          onClick={() => dispatch(setOpenSidebar(true))}
          className='text-2xl text-gray-500 dark:text-white block md:hidden'
        >
          ☰
        </button>

        <div className='w-64 2xl:w-[400px] flex items-center py-2 px-3 gap-2 rounded-full bg-[#f3f4f6]'>
          <MdOutlineSearch className='text-gray-500 text-xl' />

          <input
            type='text'
            placeholder='Procurar...'
            className='flex-1 outline-none bg-transparent placeholder:text-gray-500 text-gray-800'
          />
        </div>
      </div>

        

      <div className='flex gap-2 items-center text-black dark:text-white'>
        <button
          type='button'
          onClick={toggleTheme}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
        >
          {theme === "light" ? <FaRegMoon /> : <IoSunny />}
        </button>
        <NotificationPanel />

        <UserAvatar />
      </div>
    </div>
  );
};

export default Navbar;
