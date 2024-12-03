import React from "react";
import {
  MdDashboard,
  MdOutlineAddTask,
  MdOutlinePendingActions,
  MdSettings,
  MdTaskAlt,
} from "react-icons/md";
import { FaTasks, FaTrashAlt, FaUsers } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setOpenSidebar } from "../redux/slices/authSlice";
import clsx from "clsx";

const linkData = [
  {
    label: "Painel",
    link: "dashboard",
    icon: <MdDashboard />,
  },
  {
    label: "Visão Geral",
    link: "task",
    icon: <FaTasks />,
  },
  {
    label: "Finalizados",
    link: "finalizado/finalizado",
    icon: <MdTaskAlt />,
  },
  {
    label: "Em Andamento",
    link: "em andamento/em andamento",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "Em Recrutamento",
    link: "recrutando/recrutando",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "Curriculo",
    link: "curriculo",
    icon: <HiOutlineDocumentText />,
  },
  {
    label: "Time",
    link: "team",
    icon: <FaUsers />,
  },
  {
    label: "Lixeira",
    link: "trashed",
    icon: <FaTrashAlt />,
  },
];

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const location = useLocation();

  const path = location.pathname.split("/")[1];

  const sidebarLinks = user?.isAdmin ? linkData : linkData.slice(0, 5);

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  const NavLink = ({ el }) => {
    return (
      <Link
        to={el.link}
        onClick={closeSidebar}
        className={clsx(
          "w-full lg:w-3/4 flex gap-2 px-3 py-2 rounded-full items-center text-gray-800 dark:text-white text-base hover:bg-[#2564ed2d]",
          path === el.link.split("/")[0] ? "bg-purple-500 text-neutral-100" : ""
        )}
      >
        {el.icon}
        <span className='hover:text-[#2564ed]'>{el.label}</span>
      </Link>
    );
  };
  return (
    <div className='w-full h-full bg-white dark:bg-gray-800 flex flex-col gap-6 p-5'>
      <h1 className='flex gap-1 items-center'>
        <p className=''>
          <MdOutlineAddTask className='text-white text-2xl font-black' />
        </p>
        <span className='text-2xl font-bold text-black dark:text-white'><span className="text-purple-500">Be</span>Connect</span>
      </h1>

      <div className='flex-1 flex flex-col gap-y-5 py-8'>
        {sidebarLinks.map((link) => (
          <NavLink el={link} key={link.label} />
        ))}
      </div>

      <div className=''>
        <button type="button" className='w-full flex gap-2 p-2 items-center text-lg text-gray-800 dark:text-white'>
          <MdSettings />
          <span>Configurações</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
