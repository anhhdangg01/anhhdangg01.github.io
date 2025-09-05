import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import '../styles/navigator.css';
import routes_data from '../data/routes.json';

const routes = routes_data.routes;

function Navigator() {
  const [isOpen, setOpen] = useState(false);

  const getRoutes = () => {
    return(
      <ul>
        {routes.map((route) => {
          return(
            <li>
              <a class="nav-link" href={`#${route.route}`} onclick={() => setOpen((prev) => !prev)}>
                <span>{route.title}</span>
                </a></li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className="header">
      <div className="navigator">
        {getRoutes()}
      </div>
      <div className="hamburger">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#CBD5E1" distance="lg" rounded />
        {isOpen && (
          <div className="mobile-nav">
            {getRoutes()}
          </div>
        )}
      </div>
    </div>

  )
}

export default Navigator;