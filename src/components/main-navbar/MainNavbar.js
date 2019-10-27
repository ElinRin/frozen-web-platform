import React, { useState, useContext, useEffect } from "react";
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
import { ProfileContext } from "../../app/Context";
import { logoutUser, fetchMe } from "../../actions/user";
import { firebaseTools } from "../../utils/firebase";
import { CURRENT_USER } from "../../actions/types";
import "./MainNavbar.css";

export const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, profileDispatch] = useContext(ProfileContext);
  const path = usePath();
  const toggle = () => setIsOpen(!isOpen);

  if (path !== "/login" && !(profile.userId && profile.userId.length)) {
    const id = firebaseTools.currentUser();
    if (id && id.length) {
      profileDispatch({
        type: CURRENT_USER,
        payload: { userId: id }
      });
      fetchMe(profileDispatch).catch(error => console.log(error));
    } else {
      navigate("/login", true);
    }
  }

  useEffect(() => {
    if (
      path !== "/login" &&
      profile.userId &&
      typeof profile.profileImage === "undefined"
    ) {
      fetchMe(profileDispatch).catch(error => console.log(error));
    }
  }, [path, profile, profile.userId, profileDispatch]);

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
            <NavLink onClick={() => navigate("/main")}>Main</NavLink>
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
              <Media
                object
                bottom
                src={profile.profileImage}
                className="main-navbar-photo"
              />
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

  return <>{profile.userId && renderNavBar()} </>;
};
