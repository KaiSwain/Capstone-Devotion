import "./NavBar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <ol className="navbar">
      <li className="navbar-item">
        {/* Link component allows you to navigate to another 
        url by clicking on whats inside */}
        <Link to="./profile">Profile</Link>
      </li>
      <li className="navbar-item">
        <Link to="/home">Home</Link>
      </li>
      <li className="navbar-item">
        <Link to="/ai">AI</Link>
      </li>
      <li className="navbar-item">
        <Link to="/about">About</Link>
      </li>

      {localStorage.getItem("dev_user") ? (
        <li className="navbar-item navbar-logout">
          <Link
            className="navbar-link"
            to=""
            onClick={() => {
              localStorage.removeItem("dev_user");
              navigate("/login", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ol>
  );
};
