import React from "react";



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info justify-content-between">
      <div>
        {/* <h1 class="text-hide" style="background-image: url('../../../../Assets/Logo.PNG'); width: 50px; height: 50px;">Helping Hand</h1> */}
        <i className="fad fa-hands-helping fa-10x"></i>
        <a className="navbar-brand" href="/">


          <ul className="list-inline">
            <li className="list-inline-item">
              <h3>Helping Hands</h3>
            </li>
          </ul>
        </a>

      </div>
      <div>

        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link text-light" href="../Assets/Questionnaire.PNG">Log In</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="../About/about.js">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;