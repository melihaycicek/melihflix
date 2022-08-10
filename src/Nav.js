import React, { useEffect, useState } from 'react'
import "./App.css"
import "./Nav.css"

function Nav() {
    const[show, handleShow] = useState(false);
    useEffect(()=>{
window.addEventListener("scroll",()=>{
    if(window.scrollY > 100){
        handleShow(true);
    }else handleShow(false);
});
return()=>{
    window.removeEventListener("scroll");
};
    }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo"
      src="https://www.linkpicture.com/q/netflix-logo.png"
      alt="Neflix Logo"
      />

<img
className="nav__avatar"
src="https://www.linkpicture.com/q/fornetflix.png"
alt="Netflix Logo"/>

    </div>
  )
}

export default Nav
