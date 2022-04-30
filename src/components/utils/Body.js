import React from "react";
import transakSDK from '@transak/transak-sdk'

let transak = new transakSDK({
  apiKey: 'fec0443a-44f5-4890-aa3f-b09626d6485e',  // Your API Key
  environment: 'STAGING', // STAGING/PRODUCTION
  defaultCryptoCurrency: 'ETH',
  walletAddress: '', // Your customer's wallet address
  themeColor: '000000', // App theme color
  fiatCurrency: '', // INR/GBP
  email: '', // Your customer's email address
  redirectURL: '',
  hostURL: window.location.origin,
  widgetHeight: '550px',
  widgetWidth: '450px'
});

let toMe = new transakSDK({
  apiKey: 'fec0443a-44f5-4890-aa3f-b09626d6485e',  // Your API Key
  environment: 'STAGING', // STAGING/PRODUCTION
  defaultCryptoCurrency: 'ETH',
  walletAddress: '0xc0D08b04B73BF799662D7625A62445bb00FcCe04', // Your customer's wallet address
  themeColor: '000000', // App theme color
  fiatCurrency: '', // INR/GBP
  email: '', // Your customer's email address
  redirectURL: '',
  hostURL: window.location.origin,
  widgetHeight: '550px',
  widgetWidth: '450px'
});

 transak.on(transak.ALL_EVENTS, (data) => {
  console.log(data)
});


const Body = () => {
  return (
    <div>
      <div className="container">
        <div className="hero-text">
          <h3>Hi, There!</h3>
          <h1>
            Welcome to <span className="input">CrytoWallet Topup.</span>
          </h1>
          <ul>
            <li>Accept payments by credit card, debit card or bank transfer</li>
            <li>More than 100 countries and territories supported with over 60 currencies, so users pay in their local currency</li>
            <li>Support for all major blockchains, tokens and stable-coins. 80+ cryptocurrencies in total</li>
            <li>Continuously adding new currencies, blockchains, digital assets and protocols</li>
          </ul>
          <div className="social">
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-behance-square"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-pinterest"></i>
            </a>
          </div>
          <div className="forbuttons">
            <button type="button" onClick={() => transak.init()}>Buy Self</button>
            <button type="button" onClick={() => toMe.init()}>Buy Others</button>
          </div>
        </div>
        <div className="hero-img">
        {/* <iframe height="600" title="Transak On/Off Ramp Widget (Website)" src="https://staging-global.transak.com?apiKey=fec0443a-44f5-4890-aa3f-b09626d6485e" allowtransparency="true" allowfullscreen="" style="display: block; width: 100%; max-height: 550px; max-width: 450px; border: none;"></iframe> */}
        </div>

        <div className="bottom">
          <p>@ 2022 RSVP app - All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
