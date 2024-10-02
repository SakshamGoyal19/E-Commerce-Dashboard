import React, { useState, ReactNode } from 'react';
import Header from '../components/Header/index';
import Sidebar from '../components/Sidebar/index';
import SidebarRight from '../components/SideBarRight';

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarRightOpen, setSideBarRightOpen] = useState(true);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="no-scrollbar relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header
            sidebarRightOpen={sidebarRightOpen}
            setSideBarRightOpen={setSideBarRightOpen}
          />
          <main>
            <div className="flex flex-col h-screen mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-white dark:bg-boxdark-2">
              <div className="flex-grow overflow-y-auto no-scrollbar">
                {children}
              </div>
            </div>
          </main>
        </div>
        {sidebarRightOpen && <SidebarRight />}
      </div>
    </div>
  );
};

export default DefaultLayout;
