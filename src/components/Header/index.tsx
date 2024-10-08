import DropdownMessage from './DropdownMessage';
import DropdownNotification from './DropdownNotification';
import DarkModeSwitcher from './DarkModeSwitcher';

const Header = ({
  sidebarOpen,
  setSidebarOpen,
  sidebarRightOpen,
  setSideBarRightOpen,
}: any) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1 shadow-sm dark:border-strokedark dark:bg-boxdark"
          >
            <div className="space-y-1 cursor-pointer hover:bg-gray-100 p-1 rounded">
              <span className="block w-6 h-0.5 bg-gray-600 transition-all duration-300 bg-boxdark dark:bg-white"></span>
              <span className="block w-6 h-0.5 bg-gray-600 transition-all duration-300 bg-boxdark dark:bg-white"></span>
              <span className="block w-6 h-0.5 bg-gray-600 transition-all duration-300 bg-boxdark dark:bg-white"></span>
            </div>
          </button>
        </div>
        <p className="text-lg font-semibold">e-Commerce</p>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DarkModeSwitcher />
            <DropdownNotification />
            <DropdownMessage
              sidebarRightOpen={sidebarRightOpen}
              setSideBarRightOpen={setSideBarRightOpen}
            />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
