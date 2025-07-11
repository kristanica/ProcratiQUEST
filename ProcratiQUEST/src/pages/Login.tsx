import { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const useLogin = async () => {
    try {
      const res = await fetch(`http://localhost:8080/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          password: password,
        }),
      });
      if (!res.ok) {
        const error = await res.json();
        console.log(error);
        return;
      }
      const userData = await res.json();

      localStorage.setItem("userInfo", JSON.stringify(userData.user));

      navigate(`/homepage`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center bg-[var(--background)] min-h-screen flex-col">
      <p className="text-3xl font-bold text-center mb-6 text-white">
        Procrasti<span className="text-[#FF6166]">QUEST</span>
      </p>
      <p className="text-white font-bold flex flex-row text-4xl text-shadow-lg/30"></p>
      <div className="w-full max-w-md bg-[var(--accent)] rounded-2xl p-8 shadow-xl  ">
        <form className="flex-col flex h-full">
          <label className="text-white font-bold flex items-center gap-2 mb-2">
            <FaUser />
            Username
          </label>
          <input
            type="text"
            value={userName}
            placeholder="Enter your Username "
            className="w-full my-3 bg-[#0a0114] text-white rounded-lg p-3 placeholder:text-sm placeholder:font-medium text-whiteborder-[#ff00aa] border-[3px] border-[#ff00aa] placeholder:text-[#c3c3c3] focus:border-[#00faff]"
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
            className="w-full mb-4 bg-[#0a0114] rounded-lg p-3 placeholder:text-sm placeholder:font-medium border-[#ff00aa] border-[3px] text-white placeholder:text-[#c3c3c3] focus:border-[#00faff]"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-center items-center">
            <button
              onClick={() => useLogin()}
              type="button"
              className="bg-[#ff00aa] py-2 px-7 rounded-2xl cursor-pointer text-white font-bold w-2xs"
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
