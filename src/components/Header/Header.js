import React from 'react';
// import { Link } from 'react-router-dom';

function Header(props){

  return(
    <>
    <h1 className="header__title">Terry's Page</h1>
    <nav className="header__nav">
      <a className="header__link" href="#">About Me</a> {/*landing page*/}
      <a className="header__link" href="https://ze-e.github.io/clicmders-mvp/">About My Goats</a>
    </nav>
    </>
  )
}

export default Header;