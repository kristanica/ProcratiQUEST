import { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RegisterModal } from "../assets/components/Register/RegisterModal";

export const Register = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [modal, setModal] = useState<boolean>(false);

  const useRegister = async (id: number) => {
    try {
      if (password !== confirmPassword) {
        console.log(id);
        return console.log("password does not match");
      }
      const res = await fetch(`http://localhost:8080/users/${id}`, {
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
      const resData = await res.json();
      console.log(resData);
      setModal(true);
    } catch (error) {}
  };

  return (
    <div className="flex bg-[#0D1117] min-h-screen flex-col justify-center items-center">
      <p className="text-3xl font-bold text-center mb-6 text-white">
        Procrasti<span className="text-[#FF6166]">QUEST</span>
      </p>
      <div className="flex max-w-md bg-[#25293B] w-full  rounded-2xl p-8 shadow-xl flex-col">
        <form className="flex flex-col font-bold text-white w-full">
          <label className="flex flex-row items-center gap-3">
            <FaUser />
            Username
          </label>
          <input
            type="text"
            placeholder="Username"
            className="bg-[#1E212F] rounded-2xl p-3 m-2 placeholder:font-medium placeholder:text-sm"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <label className="flex flex-row items-center gap-3">
            <FaLock />
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="bg-[#1E212F] rounded-2xl p-3 m-2 placeholder:font-medium placeholder:text-sm"
          ></input>
          <label className="flex flex-row items-center gap-3">
            <FaLock />
            Confirm password
          </label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm password"
            className="bg-[#1E212F] rounded-2xl p-3 m-2 placeholder:font-medium placeholder:text-sm"
          ></input>

          <div className="flex justify-center items-center my-3">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                const uid = Date.now();
                useRegister(uid);
              }}
              className="bg-[#7F5AF0] py-2 px-7 rounded-2xl cursor-pointer text-white font-bold w-2xs"
            >
              <p>Register</p>
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center text-white">
          <p>
            Already have an account?
            <span className="text-[#7F5AF0]">
              <Link to="/">Login here</Link>
            </span>
          </p>
        </div>
      </div>
      {modal && (
        <RegisterModal visible={modal} onClose={() => setModal(!modal)} />
      )}
    </div>
  );
};
