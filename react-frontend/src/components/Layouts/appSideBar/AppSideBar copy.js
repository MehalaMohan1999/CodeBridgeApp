import AppSideBarProvider from "./AppSideBarProvider";
import Toggle from "../../../assets/icons/Toggle";
import Home from "../../../assets/icons/Home.js";
import Data from "../../../assets/icons/Data.js";
import Messaging from "../../../assets/icons/Messaging.js";
import Report from "../../../assets/icons/Report.js";
import GenAI from "../../../assets/icons/GenAI.js";
import StaffInfo from "../../../assets/icons/StaffInfo.js";
import Stack from "../../../assets/icons/Stack.js";
import DynaLoader from "../../../assets/icons/DynaLoader.js";
import Notification from "../../../assets/icons/Notification.js";
import Server from "../../../assets/icons/Server.js";
import Email from "../../../assets/icons/Email.js";
import MailSent from "../../../assets/icons/MailSent.js";
import Load from "../../../assets/icons/Load.js";
import Chat from "../../../assets/icons/Chat.js";
import Terminal from "../../../assets/icons/Terminal.js";
import Documents from "../../../assets/icons/Documents.js";
import Admin from "../../../assets/icons/Admin.js";
import Users from "../../../assets/icons/Users.js";
import { classNames } from "primereact/utils";
import AppMenu from "./AppMenu";
import { useState } from "react";
import AppFooter from "../AppFooter";
import Building from "../../../assets/icons/Building.js";
import Profile from "../../../assets/icons/Profile.js";
import Profiles from "../../../assets/icons/Profiles.js";
import Employees from "../../../assets/icons/Employees.js";
import UserLogin from "../../../assets/icons/UserLogin.js";
import Superiors from "../../../assets/icons/Superiors.js";
import Roles from "../../../assets/icons/Roles.js";
import Positions from "../../../assets/icons/Positions.js";
import Addresses from "../../../assets/icons/addresses.js";
import Phones from "../../../assets/icons/Phones.js";
import Companies from "../../../assets/icons/Companies.js";
import Branches from "../../../assets/icons/Branches.js";
import Sections from "../../../assets/icons/Sections.js";

const AppSideBar = (props) => {
  const { activeKey: initialActiveKey, activeDropdown: initialActiveDropdown } =
    props;
  const [activeKey, setActiveKey] = useState(initialActiveKey);
  const [activeDropdown, setActiveDropdown] = useState(initialActiveDropdown);
  const [open, setOpen] = useState(true);
  return (
    <>
      <div
        className={classNames(
          "duration-300 flex-shrink-0",
          open ? "w-[280px]" : "w-[calc(3rem+20px)]",
        )}
      ></div>
      <AppSideBarProvider
        activeKey={activeKey}
        setActiveKey={setActiveKey}
        open={open}
        setOpen={setOpen}
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
      >
        <div
          className={classNames(
            "fixed z-[100] flex flex-col top-20 left-0 h-[calc(100vh-5rem)] overflow-y-hidden overflow-x-hidden  flex-shrink-0 shadow bg-[#F8F9FA] border-r border-[#DEE2E6] border-solid duration-300",
            open ? "w-[280px]" : "w-[calc(3rem+20px)]",
          )}
        >
          <div className="flex-grow gap-1 p-2 overflow-x-hidden overflow-y-auto no-scrollbar">
            <div className="flex gap-3 px-3 py-[10px]">
              <span className="cursor-pointer" onClick={() => setOpen(!open)}>
                <Toggle />
              </span>
            </div>
            <AppMenu
              icon={<Home />}
              label="Dashboard"
              menuKey="dashboard"
              to="/DashboardAdminControl"
            />
              <AppMenu
              icon={<Admin/>}
              label="Admin Controls"
              menuKey="admin-controls"
              menus={[
                {
                  label: "Department admin",
                  menuKey: "department-admin",
                  to:"/DepartmentAdmin",
                
                },
                {
                  label: "Head of department",
                  menuKey: "head-of-department",
                  to:"/DepartmentHOD",
                },
                {
                  label: "Head of section",
                  menuKey: "haed-of-section",
                  to:"/DepartmentHOS",
                },
                {
                  label: "Service permissions",
                  menuKey: "service-permissions",
                  to:"/PermissionServices",
                },
                {
                  label: "Testing job tasks",
                  menuKey: "testing-job-tasks",
                  to: "/testProject"
                },
              ]}
              setActiveKey={setActiveKey}
            />
            <AppMenu
              icon={<Data />}
              label="Data management"
              menuKey="data-management"
              menus={[
                {
                  label: "Staff info",
                  icon: <StaffInfo />,
                  menuKey: "staff-info",
                  to:"/Staffinfo",
                },
                {
                  label: "DynaLoader",
                  icon: <DynaLoader />,
                  menuKey: "dyna-loader",
                  to: "/DynaFields",
                },
                {
                  label: "Job ques",
                  icon: <Stack />,
                  menuKey: "job-ques",
                  to: "/JobQues",
                },
              ]}
              setActiveKey={setActiveKey}
            />
            <AppMenu
              icon={<Users/>}
              label="User management"
              menuKey="user-management"
              menus={[
                {
                  label: "Users",
                  icon: <Profile/>,
                  menuKey: "users",
                  to:"/Users",
                },
                {
                  label: "Profiles",
                  icon: <Profiles />,
                  menuKey: "profiles",
                  to:"/Profiles",
                },
                {
                  label: "Employees",
                  icon: <Employees />,
                  menuKey: "employees",
                  to:"/Employees",
                },
                {
                  label: "User invites",
                  icon: <MailSent />,
                  menuKey: "user-invites",
                  to:"/UserInvites",
                },
                {
                  label: "User logins",
                  icon: <UserLogin />,
                  menuKey: "user-logins",
                  to:"/UserLogin",
                },
                {
                  label: "Superiors",
                  icon: <Superiors />,
                  menuKey: "superiors",
                  to: "/Superior",
                },
                {
                  label: "Roles",
                  icon: <Roles />,
                  menuKey: "roles",
                  to: "/Roles",
                },
                {
                  label: "Positions",
                  icon: <Positions />,
                  menuKey: "positions",
                  to: "/Positions",
                },
                {
                  label: "Addresses",
                  icon: <Addresses />,
                  menuKey: "addresses",
                  to: "/UserAddresses",
                },
                {
                  label: "Phones",
                  icon: <Phones />,
                  menuKey: "phones",
                  to: "/UserPhones",
                },
                
              ]}
              setActiveKey={setActiveKey}
            />

            <AppMenu
              icon={<Building/>}
              label="Company management"
              menuKey="company-management"
              menus={[
                {
                  label: "Companies",
                  icon: <Companies />,
                  menuKey: "companies",
                  to: "/Companies",
                },
                {
                  label: "Branches",
                  icon: <Branches />,
                  menuKey: "branches",
                  to: "/Branches",
                },
                {
                  label: "Departments",
                  icon: <Positions />,
                  menuKey: "departments",
                  to: "/Departments",
                },
                {
                  label: "Sections",
                  icon: <Sections/>,
                  menuKey: "sections",
                  to: "/Sections",
                },
                {
                  label: "Company addresses",
                  icon: <Addresses/>,
                  menuKey: "company-addresses",
                  to: "/CompanyAddresses",
                },
                {
                  label: "Company phones",
                  icon: <Phones/>,
                  menuKey: "company-phones",
                  to: "/CompanyPhones",
                },
              ]}
              setActiveKey={setActiveKey}
            />
            
            <AppMenu
              icon={<Messaging />}
              label="Messaging"
              menuKey="messaging"
              menus={[
                {
                  label: "Notifications",
                  icon: <Notification />,
                  menuKey: "notifications",
                  to: "/Notifications"
                },
                {
                  label: "Email templates",
                  icon: <Email />,
                  menuKey: "email-templates",
                  to: "/Templates",
                },
                {
                  label: "Mail sent logs",
                  icon: <MailSent />,
                  menuKey: "mail-sent-logs",
                  
                },
                {
                  label: "Mail job ques",
                  icon: <Stack />,
                  menuKey: "mail-job-ques",
                  to: "/MailQues",
                },
                {
                  label: "Mail warehouse",
                  icon: <Server />,
                  menuKey: "mail-warehouse",
                  to: "/MailWH",
                },
              ]}
            />
            <AppMenu
              icon={<Report />}
              label="Reports"
              menuKey="reports"
              menus={[
                {
                  label: "Generate reports",
                  icon: <Load />,
                  menuKey: "generate-reports",
                },
              ]}
            />
            <AppMenu
              icon={<GenAI />}
              label="Gen AI"
              menuKey="gen-ai"
              menus={[
                {
                  label: "Chat AI",
                  icon: <Chat />,
                  menuKey: "chat-ai",
                },
                {
                  label: "Prompts",
                  icon: <Terminal />,
                  menuKey: "prompts",
                },
                {
                  label: "Usage",
                  icon: <Documents />,
                  menuKey: "usage",
                },
              ]}
            />
          </div>
          <div
            className={classNames(
              "text-center duration-300",
              open ? "opacity-100" : "opacity-0",
            )}
          >
            <AppFooter />
          </div>
        </div>
      </AppSideBarProvider>
    </>
  );
};

export default AppSideBar;
