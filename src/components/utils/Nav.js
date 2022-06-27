import React, {useState, useEffect} from "react";
import UAuth from '@uauth/js'

const uauth = new UAuth({
  clientID: "2d80cf05-1f43-48f8-9274-21f585efed45",
  redirectUri: "http://localhost:3000/login",
})



const Nav = () => {
  const [toggle, setToggle] = useState(true);
  const [userWallet, setUserWallet] = useState(null);

  const login = async () => {
    try {
      const authorization = await uauth.loginWithPopup()
      window.location.reload();   
      console.log(authorization)
    } catch (error) {
      console.error(error)
    }
  }
  
  const logout = () => {
   uauth.logout();

  }


  useEffect(() => {
    setUserWallet("Login With Unstoppable")
    uauth.user()
    .then((user) => {
      setUserWallet(user.sub)
      // user exists
      console.log("User information:", user);
    })
    .catch(() => {
      // user does not exist
    })
  });

  

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
            <a onClick={() => login()}>{userWallet}</a>
          </li>
          { userWallet ? 
          <li className="btn">
          <a onClick={() => logout()}>logout</a>
        </li> :
        null
        }
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
