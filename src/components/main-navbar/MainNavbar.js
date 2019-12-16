import React, { useState, useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
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
import { logoutUser, fetchMe, loginUserByToken } from "../../actions/user";
import "./MainNavbar.css";

export const MainNavbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [isOpen, setIsOpen] = useState(false);
  const [profile, profileDispatch] = useContext(ProfileContext);
  const path = usePath();
  const toggle = () => setIsOpen(!isOpen);

  console.log({ id: profile.userId, cookies });

  if (path !== "/login" && !(profile.userId && profile.userId.length)) {
    if (cookies.token) {
      console.log({ id: profile.userId, cookies });
      loginUserByToken(cookies.token, profileDispatch).then(id => {
        fetchMe(profileDispatch).catch(error => console.log(error));
      });
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
            <NavLink href="#" onClick={() => navigate("/main")}>
              Main
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => navigate("/workplace")}>
              Workplace
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => navigate("/colleagues")}>
              Colleagues
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => navigate("/meetings")}>
              Meetings
            </NavLink>
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
              <DropdownItem divider />
              <DropdownItem
                onClick={() => {
                  removeCookie("token");
                  logoutUser(profileDispatch);
                }}
              >
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
