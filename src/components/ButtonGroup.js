import { Link, useLocation } from "react-router-dom";

export const ButtonGroup = () => {
  const location = useLocation();

  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <Link to="/">
        <button
          type="button"
          className={`px-4 py-2 w-40 text-sm font-medium ${
            location.pathname === "/"
              ? "bg-gray-900 text-white"
              : "text-gray-900 bg-transparent border-gray-900 hover:bg-gray-900 hover:text-white"
          } border border-gray-900 rounded-s-lg focus:z-10 focus:ring-2 focus:ring-gray-500 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700`}
        >
          Dashboard
        </button>
      </Link>

      <Link to="/forecast">
        <button
          type="button"
          className={`px-4 py-2 w-40 text-sm font-medium ${
            location.pathname === "/forecast"
              ? "bg-gray-900 text-white"
              : "text-gray-900 bg-transparent border-gray-900 hover:bg-gray-900 hover:text-white"
          } border-t border-b border-r rounded-e-lg focus:z-10 focus:ring-2 focus:ring-gray-500 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700`}
        >
          Forecast
        </button>
      </Link>
    </div>
  );
};
