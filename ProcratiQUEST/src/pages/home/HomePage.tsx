import { useEffect, useState } from "react";
import NavigationBar from "../../assets/components/global/NavigationBar";
import lainImage from "../../assets/images/lainImage.jpg";
const HomePage = () => {
  const [userData, setUserData] = useState<any>();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      const parseData = JSON.parse(userInfo);
      setUserData(parseData);
    }
  }, []);
  return (
    <div className="min-h-screen bg-[#0a0114] flex">
      <NavigationBar />
      <main className="flex-1 p-6">
        <div className="min-h-[20%] border-[#739c94]  border-[2px] rounded-xl bg-[#1c002b] flex flex-row justify-between px-10 py-3">
          <div className="flex flex-col w-[50%] justify-between">
            <p className="text-white text-4xl font-extrabold ">
              Welcome back, {userData?.displayName}
            </p>

            <div className="">
              <div className="w-full h-[20px] bg-red-200 rounded-3xl ">
                <div className="w-[50%] h-full bg-[#00ffcc] rounded-3xl"></div>
              </div>
              <p className="text-[#fdfdfd] mt-1 flex items-center ">
                3/100 EXP
              </p>
            </div>

            <p className="text-[#fdfdfd] text-lg">{userData?.bio}</p>
          </div>
          <img
            src={lainImage}
            className="h-full max-w-[20%] rounded-full"
          ></img>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
