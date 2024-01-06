import { useState } from "react";
import logo from "../assets/img/the spicy meal.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoMdHome } from "react-icons/io";
import { User, useAuth0 } from "@auth0/auth0-react";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

// import Instamart from "./instamart";

const Title = () => (
  <a href="/">
    <img className="logo h-20" alt="logo" src={logo} />
  </a>
);


const HeaderComponent = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul className="flex">
          <Link to="/">
            <li className="home">
              <IoMdHome className="home-icon" /> Home
            </li>
          </Link>

          <Link to="/About">
            <li className="about">About</li>
          </Link>
          <Link to="/Contact">
            <li className="contact">Contact</li>
          </Link>
          <Link to="/cart">
            <li className="cart-items">
              <LiaShoppingBagSolid className="cart-icon" />
              Cart {cartItems.length}
            </li>
          </Link>

          {/* <Link to = "/Instamart">
            <li>Instamart</li>
          </Link> */}
        </ul>
      </div>
      <div className="login">
        {/* {isLoggedin ? (
          <button
            onClick={() => {
              setIsLoggedin(false);
            }}
          >
            Log in
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLoggedin(true);
            }}
          >
            Log out
          </button>
        )} */}

        {isAuthenticated && <p className="username">{user.name}</p>}

        {isAuthenticated ? (
          <button
            className="logout-auth"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out <CiLogout className="logout-icon" />
          </button>
        ) : (
          <button className="login-auth" onClick={() => loginWithRedirect()}>
            Log In <CiLogin className="login-icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default HeaderComponent;
