import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import baseUrl from "./baseUrl";
require("dotenv").config();

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch(`${baseUrl}/profile`, {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function logout() {
    fetch(`${baseUrl}/logout`, {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo headText">
        Handle
      </Link>
      <nav>
        {username && (
          <>
            <Link className="headText headText1" to="/create">
              🚩 Create new post
            </Link>
            <span className="headText headText2" onClick={logout}>
              Logout ({username})
            </span>
          </>
        )}
        {!username && (
          <>
            <Link className="headText headText3" to="/login">
              Login
            </Link>
            <Link className="headText headText4" to="/register">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
