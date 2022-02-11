import React from "react";
import "./Header.css";

import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import Logo from '../../assets/logo512.png';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="Navigation">
            <Navbar style={{
                backgroundColor: "#D70F64",
                height: "70px"
            }}>
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
                    <img src={Logo} alt="logo" width="50px" />
                </NavbarBrand>
                <Nav className="mr-md-5">
                    <NavItem >
                        <NavLink exact="true" to="/" className="NavLink">Burger Builder</NavLink>

                    </NavItem>
                    <NavItem >
                        <NavLink exact="true" to="/orders" className="NavLink">Orders</NavLink>

                    </NavItem>
                    <NavItem >
                        <NavLink exact="true" to="/login" className="NavLink">login</NavLink>

                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;