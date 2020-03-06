import React from "react";



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info justify-content-between">
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQu3FurHSXwGq6OMy9LepXlUnY_gnkSCsZENQjRJOlasBFcgxgw" alt="CaughtJA" width="50" height="50" />

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
          {/* <li className="nav-item">
            <a className="nav-link text-light" href="/Caughtja/caughtja/client/src/pages/Contact.js">Log In</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link text-light" href="https://helpinghands-ut.herokuapp.com/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="https://helpinghands-ut.herokuapp.com/events">Events</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
