import { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const useLogin = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:8080/users/${id}`, {
        method: "GET",
      });
      if (!res.ok) {
        const error = await res.json();
        console.log(error);
        return;
      }
      const json = await res.json();
      console.log(json);
    } catch (error) {}
  };

  return (
    <div className="flex justify-center items-center bg-[#0D1117] min-h-screen flex-col">
      <p className="text-3xl font-bold text-center mb-6 text-white">
        Procrasti<span className="text-[#FF6166]">QUEST</span>
      </p>
      <p className="text-white font-bold flex flex-row text-4xl text-shadow-lg/30"></p>
      <div className="w-full max-w-md bg-[#25293B] rounded-2xl p-8 shadow-xl  ">
        <form className="flex-col flex h-full">
          <label className="text-white font-bold flex items-center gap-2 mb-2">
            <FaUser />
            Username:
          </label>
          <input
            type="text"
            value={userName}
            placeholder="Enter your Username "
            className="w-full my-3 bg-[#1E212F] rounded-lg p-3 placeholder:text-sm placeholder:font-medium text-white"
            onChange={(e) => setUserName(e.target.value)}
          />

          <label className="text-white font-bold mb-2 flex items-center gap-2">
            <FaLock />
            Password
          </label>
          <input
            type="password"
            value={password}
            placeholder="Enter your Password"
            className="w-full mb-4 bg-[#1E212F] rounded-lg p-3 placeholder:text-sm placeholder:font-medium text-white "
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-center items-center">
            <button
              onClick={() => useLogin(13)}
              type="button"
              className="bg-[#7F5AF0] py-2 px-7 rounded-2xl cursor-pointer text-white font-bold w-2xs"
            >
              <p>Login</p>
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center my-3">
          <p className="text-white font-medium">
            Dont have an account?
            <span className="text-[#7F5AF0]">
              <Link to="/register"> Register here</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
