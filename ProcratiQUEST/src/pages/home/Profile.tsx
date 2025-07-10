import React from "react";
import NavigationBar from "../../assets/components/global/NavigationBar";

export const Profile = () => {
  return (
    <div className="min-h-screen bg-[#0a0114] h-full flex">
      <NavigationBar />
      <main className="flex-1 p-6">
        <p className="text-white text-xl">This is Profile</p>
      </main>
    </div>
  );
};
