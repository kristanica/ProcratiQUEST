import { NavLink } from "react-router-dom";
import { navigation } from "../../constants/constants";
import { FaDoorOpen } from "react-icons/fa6";

const NavigationBar = () => {
  return (
    <>
      <nav className="text-white max-w-[15%] min-h-screen bg-[#4b006e] border-[#ff00aa] border-r-[2px] flex flex-col justify-between">
        <div className="flex flex-col gap-5 py-3 px-5 ">
          <p className=" text-2xl font-bold   text-white">
            Procrasti<span className="text-[#FF6166]">QUEST</span>
          </p>

          {navigation.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) =>
                [
                  isActive
                    ? "text-black flex flex-row items-center gap-2"
                    : " flex flex-row items-center gap-2",
                ].join("")
              }
            >
              <item.icon />
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="px-5 pb-3">
          <NavLink to="/" className="flex-row flex items-center gap-2">
            <FaDoorOpen />
            Logout
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
