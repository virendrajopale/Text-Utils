import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props) {

  return (
  <>
 {/* <div className={`bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}> */}
    <nav className={`navbar navbar-expand-lg bg-${props.mode} `} >
    <div className={`container-fluid `}>
      <Link className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} to="/">{props.title}</Link>
      <button className={`navbar-toggler text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className={`nav-item`}>
            <Link className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/">{props.Home}</Link>
          </li>
          <li className="nav-item ">
            <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}` } to="/About">{props.Abouttext}</Link>
          </li>
        </ul>
       
        <div className={`form-check form-switch `}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.TextName} />
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked" >
  <div className="txt">{props.Text} Mode</div>
  </label>
</div>
      </div>
    </div>
  </nav>
  {/* </div> */}
  </>
  )
}

Navbar.propTypes={
title:PropTypes.string,
Abouttext:PropTypes.string
}
Navbar.defaultProps={
  title:"Here",
  Abouttext:"Here also"
}