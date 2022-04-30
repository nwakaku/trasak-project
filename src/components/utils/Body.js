import React from "react";

const Body = () => {
  return (
    <div>
      <div class="container">
        <div class="hero-text">
          <h3>Hi, There!</h3>
          <h1>
            Welcome <span class="input">To Umoja RSVP hub.</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            quisquam repellendus, enim dolorem dignissimos recusandae fugit
            perspiciatis exercitationem deleniti ut illum quos necessitatibus
            asperiores vero ipsum dolore? Vitae, ipsam ea.
          </p>
          <div class="social">
            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-behance-square"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-pinterest"></i>
            </a>
          </div>
          <div class="forbuttons">
            <button type="button">Create Events</button>
            <button type="button">Events</button>
          </div>
        </div>

        <div class="bottom">
          <p>@ 2022 RSVP app - All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
