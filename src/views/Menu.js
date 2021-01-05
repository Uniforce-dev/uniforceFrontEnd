import React, { Component} from 'react'
import { NavLink } from 'react-router-dom'

class Menu extends Component{ 
  
  render () {
    // const navStyle = {
    //   color: 'black'
    // }
    // const isActive = (path, match, location) => !!(match || path === location.pathname);
    return(
      <nav>
        <ul className="Nav-links">
          <NavLink
            to='/' className="Nav-link" exact
            activeClassName="Nav-link--active"
          >
            <li>UNI-FORCE tv</li>
          </NavLink>
          <NavLink
            to='/team' className="Nav-link"
            activeClassName="Nav-link--active"
          >
            <li>STREAMERS</li>
          </NavLink>
          <NavLink
            to='/association' className="Nav-link"
            activeClassName="Nav-link--active"
          >
            <li>ASSOCIATION</li>
          </NavLink>
        </ul> 
      </nav>
    )
  }
}

export default Menu