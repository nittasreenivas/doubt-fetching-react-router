import "./index.css";
import { Link } from "react-router-dom";
export default function Navigation(props) {
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <Link to="/">
          <li> Home </li>
        </Link>
        <Link to="/about">
          <li> About </li>
        </Link>
        <Link to="/products">
          <li> Products </li>
        </Link>
        <Link to="/store">
          <li> Store </li>
        </Link>
        {!props.user ? (
          <Link to="/signin">
            <li> Signin </li>
          </Link>
        ) : (
          <button>signout </button>
        )}
      </ul>
    </div>
  );
}
