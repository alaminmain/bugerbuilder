import React from "react";
import "./Header.css";

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Logo from '../../assets/logo512.png'

const Header = () => {
    return (
        <div className="Navigation">
            <Navbar style={{
                backgroundColor:"#D70F64",
                height:"70px",

            }}>
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
                    <img src={Logo} alt="logo" width="80px" />
                </NavbarBrand>
                <Nav className="mr-md-5">
                    <NavItem >
                        <navLink href="#">Something</navLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;