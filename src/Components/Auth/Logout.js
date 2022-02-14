import React, { Component } from 'react';

import { connect } from 'react-redux'
import { logout } from '../../redux/authActionCreators';
import { Route, Routes } from 'react-router';
import BurgerBuilder from '../BugerBuilder/BurgerBuilder';

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
}
class Logout extends Component {

    componentDidMount() {
        this.props.logout();
    }
    render() {
        return (
            <Routes>
                <Route path="/" element={<BurgerBuilder />} />
            </Routes>
        )
    }
}

export default connect(null, mapDispatchToProps)(Logout);