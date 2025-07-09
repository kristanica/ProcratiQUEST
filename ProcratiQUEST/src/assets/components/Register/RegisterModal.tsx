import { Link } from "react-router-dom";

type RegisterModalProps = {
  visible: boolean;
  onClose: (val: boolean) => void;
};

export const RegisterModal = ({ visible, onClose }: RegisterModalProps) => {
  if (!visible) return;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="bg-white flex flex-col  justify-evenly items-center rounded-2xl shadow-xl max-w-[20%] w-full max-h-[40%] h-full p-6 relative">
        <p>Registration Succesful</p>

        <Link to="/">
          <p>Continue to Login page</p>
        </Link>

        <button onClick={() => onClose(!visible)} className="cursor-pointer">
          <p>Close Modal</p>
        </button>
      </div>
    </div>
  );
};
