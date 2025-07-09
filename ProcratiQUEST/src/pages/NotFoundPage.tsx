import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-4">
      <Link to="/register">
        <p className="text-white text-4xl">404 Page not found</p>
      </Link>
    </div>
  );
};

export default NotFoundPage;
