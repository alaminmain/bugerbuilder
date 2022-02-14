import React from "react";
import Header from "./Header/Header";
import BurgerBuilder from "./BugerBuilder/BurgerBuilder";
import Orders from "./Orders/Orders";
import Checkout from "./Orders/Checkout/Checkout";
import { Route, Routes, Navigate } from "react-router-dom";
import Auth from "./Auth/Auth";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

const Main = props => {
    let routes = null;
    if (props.token === null) {
        routes = (
            <Routes>

                <Route path="/login" element={<Auth />} />
                <Route
                    path="*"
                    element={<Navigate to="/login" />} />

            </Routes>
        );
    }

    else {
        routes = (
            <Routes>
                <Route path="/orders" element={<Orders />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Auth />} />

                <Route path="/" element={<BurgerBuilder />} />
                <Route
                    path="*"
                    element={<Navigate to="/" />}/>
            </Routes>
        );
    }


    return (
        <div>
            <Header />
            <div className="Container">
                {routes}
            </div>

        </div>
    );
}

export default connect(mapStateToProps)(Main);