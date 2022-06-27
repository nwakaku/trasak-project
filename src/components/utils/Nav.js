import React, {useState} from "react";
import UAuth from '@uauth/js'

const uauth = new UAuth({
  clientID: "2d80cf05-1f43-48f8-9274-21f585efed45",
  redirectUri: "http://localhost",
})


const login = async () => {
  try {
    const authorization = await uauth.loginWithPopup()
 
    console.log(authorization)
  } catch (error) {
    console.error(error)
  }
}

const Nav = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <header>
      <div className="logo">
      <i className="fa-solid fa-money-bill-transfer"></i>
      </div>

      <nav>
        <div className="hamb" onClick={() => setToggle(!toggle)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={toggle ? "nav-list" : "nav-list open"}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Works</a>
          </li>
          <li className="btn">
            <a onClick={() => login()}>Login With Unstoppable</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
