const SidebarRight = () => {

  return (
    <aside
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 border-l border-l-slate-200 ${
        true ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
       <div className="w-72 bg-white dark:bg-boxdark-2 p-5 shadow-md rounded-lg">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Notifications</h3>
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
      </div>
    </div>
    </aside>
  );
};

export default SidebarRight;
