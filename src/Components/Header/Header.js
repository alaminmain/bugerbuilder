import React from "react";
import "./Header.css";

import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import Logo from '../../assets/logo512.png';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

const Header = props => {
    let links = null;
  
    if (props.token === null) {
        links = (
            <Nav className="mr-md-5">

                <NavItem >
                    <NavLink exact="true" to="/login" className="NavLink">login</NavLink>

                </NavItem>
            </Nav>
        );
    }
    else {

        links = (<Nav className="mr-md-5">
            <NavItem >
                <NavLink exact="true" to="/" className="NavLink">Burger Builder</NavLink>

            </NavItem>
            <NavItem >
                <NavLink exact="true" to="/orders" className="NavLink">Orders</NavLink>

            </NavItem>

        </Nav>
        );
    }

    return (
        <div className="Navigation">
            <Navbar style={{
                backgroundColor: "#D70F64",
                height: "70px"
            }}>
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
                    <img src={Logo} alt="logo" width="50px" />
                </NavbarBrand>
                {links}
            </Navbar>
        </div>
    )
}

export default connect(mapStateToProps)(Header);