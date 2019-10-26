import React, { useState } from "react";
import {
  Collapse,
  Media,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import logo from "../../images/frozen32.png";
import photo from "../../mocks/photo_example.jpg";
import "./MainNavbar.css";

export const MainNavbar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="white" light expand="md" className="main-navbar-container">
      <NavbarBrand href="/" className="main-navbar-logo-container">
        <Media object bottom src={logo} />
        <span className="text-primary main-navbar-logo">Frozen HR</span>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="main-navbar-items" navbar>
          <NavItem>
            <NavLink href="">Parking</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Workplace</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Meetings</NavLink>
          </NavItem>
          <UncontrolledDropdown>
            <DropdownToggle nav caret>
              <Media object bottom src={photo} className="main-navbar-photo" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>My Info</DropdownItem>
              <DropdownItem>Change Password</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Log Out</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
