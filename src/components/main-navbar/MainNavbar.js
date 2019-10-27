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
import { firebaseTools } from "../../utils/firebase";
import { CURRENT_USER } from "../../actions/types";
import "./MainNavbar.css";
import {logoutUser} from "../../actions/user";

export const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, profileDispatch] = useContext(ProfileContext);
  const path = usePath();

  console.log({ profile, path });

  if (path !== "/login" && !(profile.userId && profile.userId.length)) {
    const id = firebaseTools.currentUser();
    console.log({ id });
    if (id && id.length) {
      profileDispatch({
        type: CURRENT_USER,
        payload: { userId: id }
      });
    } else {
      navigate("/login", true);
    }
  }

  const toggle = () => setIsOpen(!isOpen);

  const renderNavBar = () => (
    <Navbar color="white" light expand="md" className="main-navbar-container">
      <NavbarBrand
        onClick={() => navigate("/")}
        className="main-navbar-logo-container"
      >
        <Media object bottom src={logo} />
        <span className="text-primary main-navbar-logo">Frozen HR</span>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="main-navbar-items" navbar>
          <NavItem>
            <NavLink onClick={() => navigate("/main")}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => navigate("/parking")}>Parking</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => navigate("/workplace")}>Workplace</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => navigate("/meetings")}>Meetings</NavLink>
          </NavItem>
          <UncontrolledDropdown>
            <DropdownToggle nav caret>
              <Media object bottom src={photo} className="main-navbar-photo" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={() => navigate(`/u/${profile.userId}`)}>
                My Info
              </DropdownItem>
              <DropdownItem>Change Password</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => logoutUser(profileDispatch)}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );

  console.log({ profile });
  return <>{profile.userId && renderNavBar()} </>;
};
