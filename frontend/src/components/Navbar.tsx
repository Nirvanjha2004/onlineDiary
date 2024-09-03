// import { useRef } from "react";
import { getAuth } from "firebase/auth";
import { MdOutlineStorage } from "react-icons/md";
import { app } from "../friebase";
import ButtonContext from "../context/ButtonContext";
import { useContext } from "react";

const auth = getAuth(app);

const SignedIn = auth.currentUser;
export default function Navbar() {
  // const ref = useRef();
  const { user } = useContext(ButtonContext);
  return (
    <nav className="sticky top-0 z-10 block w-full max-w-screen-xl px-6 py-3 mx-auto text-white bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div
          className="flex gap-2 "
          onClick={() => {
            if (user?.fileRef?.current) {
              console.log(user.fileRef.current)
              user.fileRef.current.click();
            } else {
              console.log("fileRef not available");
            }
          }}
        >
          <MdOutlineStorage className="mt-2.5 hover:cursor-pointer" />
          <a
            href="#"
            className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
          >
            Banzo
          </a>
        </div>
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {SignedIn?.emailVerified ? (
              <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <a
                  href="#"
                  className="flex items-center transition-colors hover:text-blue-500"
                >
                  SignIn
                </a>
              </li>
            ) : null}

            {SignedIn?.emailVerified ? (
              <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <a
                  href="#"
                  className="flex items-center transition-colors hover:text-blue-500"
                >
                  SignUp
                </a>
              </li>
            ) : null}

            <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
              <a
                href="#"
                className="flex items-center transition-colors hover:text-blue-500"
              >
                Support
              </a>
            </li>
            <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
              <a
                href="#"
                className="flex items-center transition-colors hover:text-blue-500"
              >
                About
              </a>
            </li>
          </ul>
        </div>
        <button
          className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
}
