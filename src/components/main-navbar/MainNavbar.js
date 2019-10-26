import React, { useState, useContext } from "react";
import { navigate, usePath } from "hookrouter";
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
import { ProfileContext } from "../../app/Context";
import "./MainNavbar.css";

export const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profile] = useContext(ProfileContext);
  const path = usePath();

  if (path !== "/login" && !(profile.userId && profile.userId.length)) {
    navigate("/login", true);
  }

  const toggle = () => setIsOpen(!isOpen);

  const renderNavBar = () => (
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

  console.log({ profile });
  return <>{profile.userId && renderNavBar()} </>;
};
