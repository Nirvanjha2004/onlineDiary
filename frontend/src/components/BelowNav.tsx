function BelowNav() {
  return (
    <div>
      <nav className="bg-gray-50 opacity-85 dark:bg-white mr-52 ml-52 p-1 rounded-lg shadow-2xl">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li className="bg-[#20c997] rounded-md p-2">
                <button
                  className="text-gray-900 dark:text-black hover:underline"
                >
                  Change Themes
                </button>
              </li>
              <li className="bg-[#ff851b] rounded-md p-2">
                <button
                  className="text-gray-900 dark:text-black hover:underline"
                >
                  Tags
                </button>
              </li>
              <li className="bg-[#28a745] rounded-md p-2">
                <a
                  href="#"
                  className="text-gray-900 dark:text-black hover:underline"
                >
                  New Journal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default BelowNav;
