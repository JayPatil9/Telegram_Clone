import React from 'react';
import logo from '../images/logo.svg';

export default function SplashScreen() {
  return (
  <>
    <div className="splash">
    <div className="cir--sp">
      <div className="svg--sp">
       <img src={logo} alt="logo" />
      </div>
    </div>
  </div>
  </>
  )
}