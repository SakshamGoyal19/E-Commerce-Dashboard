const SidebarRight = ({sidebarRightOpen, setSidebarRightOpen}: any) => {

  return (
    <aside
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-auto no-scrollbar duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 border-l border-l-slate-200 ${
        true ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
       <div className="w-72 bg-white dark:bg-boxdark-2 p-5 shadow-md rounded-lg">
      <div className="mb-6">
        <div className="flex align-center justify-between">
        <h3 className="text-lg font-semibold mb-4">Notifications</h3>
        <button
          onClick={() => setSidebarRightOpen(!sidebarRightOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarRightOpen}
          className="mb-4 block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
        </div>
        <div className="flex flex-col border-b border-gray-200 py-2">
          <span className="text-sm">You have a bug that needs attention...</span>
          <small className="text-xs text-gray-500">Just now</small>
        </div>
        <div className="flex flex-col border-b border-gray-200 py-2">
          <span className="text-sm">New user registered</span>
          <small className="text-xs text-gray-500">59 minutes ago</small>
        </div>
        <div className="flex flex-col border-b border-gray-200 py-2">
          <span className="text-sm">You have a bug that needs attention...</span>
          <small className="text-xs text-gray-500">12 hours ago</small>
        </div>
        <div className="flex flex-col py-2">
          <span className="text-sm">Andi Lane subscribed to you</span>
          <small className="text-xs text-gray-500">Today, 11:59 AM</small>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Activities</h3>
        <div className="flex flex-col border-b border-gray-200 py-2">
          <span className="text-sm">You have a bug that needs attention...</span>
          <small className="text-xs text-gray-500">Just now</small>
        </div>
        <div className="flex flex-col border-b border-gray-200 py-2">
          <span className="text-sm">Released a new version</span>
          <small className="text-xs text-gray-500">59 minutes ago</small>
        </div>
        <div className="flex flex-col border-b border-gray-200 py-2">
          <span className="text-sm">Submitted a bug</span>
          <small className="text-xs text-gray-500">12 hours ago</small>
        </div>
        <div className="flex flex-col border-b border-gray-200 py-2">
          <span className="text-sm">Modified A data in Page X</span>
          <small className="text-xs text-gray-500">Today, 11:59 AM</small>
        </div>
        <div className="flex flex-col py-2">
          <span className="text-sm">Deleted a page in Project X</span>
          <small className="text-xs text-gray-500">Feb 2, 2023</small>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Contacts</h3>
        <div className="flex items-center py-2">
          <img
            src="https://avatars.dicebear.com/api/initials/Natali%20Craig.svg"
            alt="Natali Craig"
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="font-medium text-sm">Natali Craig</span>
        </div>
        <div className="flex items-center py-2">
          <img
            src="https://avatars.dicebear.com/api/initials/Drew%20Cano.svg"
            alt="Drew Cano"
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="font-medium text-sm">Drew Cano</span>
        </div>
        <div className="flex items-center py-2">
          <img
            src="https://avatars.dicebear.com/api/initials/Orlando%20Diggs.svg"
            alt="Orlando Diggs"
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="font-medium text-sm">Orlando Diggs</span>
        </div>
        <div className="flex items-center py-2">
          <img
            src="https://avatars.dicebear.com/api/initials/Orlando%20Diggs.svg"
            alt="Orlando Diggs"
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="font-medium text-sm">Peter Parker</span>
        </div>
      </div>
    </div>
    </aside>
  );
};

export default SidebarRight;
