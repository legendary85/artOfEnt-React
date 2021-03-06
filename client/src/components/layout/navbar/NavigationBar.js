
import React, { Fragment, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './NavigationBar.css'


const NavigationBar = () => {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return <Fragment>

    <div>
      <Navbar color="faded" dark className='navBar'>
        <NavbarBrand href="/" className="mr-auto">Art of Entertainment</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem >
              <NavLink className="goldText" href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/packages">Packages</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>

  </Fragment>

}

export default NavigationBar;