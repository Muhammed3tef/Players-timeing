import React from "react";
import style from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import koran from "../../assets/koran.png";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
export default function Navbar({Dark, mood}) {
  return (
    <>
      <nav className="border-gray-200 z-[2000]  bg-gray-50 dark:bg-gray-800 dark:border-gray-700 fixed right-0 left-0 top-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={koran} className="h-8" alt="" />
            <span className="self-center px-1 text-2xl font-semibold whitespace-nowrap dark:text-white gulzar-regular">
              الفوز بالجنة
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col  font-medium mt-4  rounded-lg bg-gray-50 md:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <NavLink
                  to="prayertimes"
                  className="block amiri-regular py-2 px-3 md:px-6 md:p-0 text-white bg-blue-700 rounded md:bg-transparent   md:dark:bg-transparent"
                  aria-current="page"
                >
                  أوقات الصلاة
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="koran"
                  className="block py-2 amiri-regular px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  القرأن الكريم
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="azkar"
                  className="block py-2 amiri-regular px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  الأذكار
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="hadiths"
                  className="block py-2 amiri-regular px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  أحاديث
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="interpretation"
                  className="block py-2 amiri-regular px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  التفسير
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="qurankarimradio"
                  className="block py-2 amiri-regular px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  أذاعات القرأن الكريم
                </NavLink>
              </li>
           
              {Dark ?      <li>
                <CiSun  onClick={() => mood()} className="text-white text-2xl cursor-pointer"/>
              </li> :    <li>
                <FaMoon onClick={() => mood()} className="text-white text-2xl cursor-pointer"/>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
