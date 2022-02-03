import React from "react";
import Header from "./Header/Header";
import BurgerBuilder from "./BugerBuilder/BurgerBuilder";

const Main = props => {
    return (
        <div>
            <Header />
            <div className="Container">
                <BurgerBuilder />
            </div>

        </div>
    );
}

export default Main