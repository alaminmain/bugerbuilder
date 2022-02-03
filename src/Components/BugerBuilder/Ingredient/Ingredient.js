import React from "react";
import BurgerTop from '../../../assets/images/burger-logo.png';
import './Ingredient.css';

const Ingredient = (props) => {

    let ingredient = null;

    switch (props.type) {
        case 'bread-bottom':
            ingredient = <div><img src={BurgerTop} alt="Bottom Bread" /></div>;
            break;
        case 'bread-top':
            ingredient = <div><img src={BurgerTop} alt="Bottom Top" /></div>;
            break;
        case 'meat':
            ingredient = <div><img src={BurgerTop} alt=" Meat" /></div>;
            break;
        case 'salad':
            ingredient = <div><img src={BurgerTop} alt=" Salad" /></div>;
            break;
        case 'cheese':
            ingredient = <div><img src={BurgerTop} alt=" Cheese" /></div>;
            break;
        default:
            ingredient= null;
    }

    return (
        <div className="Ingredient">
            {ingredient}
        </div>
    )
};

export default Ingredient;