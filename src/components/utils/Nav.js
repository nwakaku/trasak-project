import React from "react";

const Nav = () => {
  return (
    <header>
      <div class="logo">
      <i class="fa-solid fa-money-bill-transfer"></i>
      </div>

      <nav>
        <div class="hamb">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul class="nav-list">
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
          <li class="btn">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
