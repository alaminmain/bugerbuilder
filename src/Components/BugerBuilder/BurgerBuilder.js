import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";
import { Modal,ModalBody,ModalHeader,ModalFooter,Button } from "reactstrap";
import Summary from "./Summary/Summary";
import NavigationToCheckout from "./Navigation/CheckoutNavigation";
import { connect } from "react-redux";
import {addIngredient,removeIngredient,updatePurchasable} from '../../redux/actionCreators'

const mapStateToProps=state=>{
    return{
        ingredient:state.ingredient,
        totalPrice:state.totalPrice,
        purchasable:state.purchasable

    }
}

const mapDispatchToProps=dispatch=>{
    return{
        addIngredient:(igtype)=>dispatch(addIngredient(igtype)),
        removeIngredient:(igtype)=>dispatch(removeIngredient(igtype)),
        updatePurchasable:()=>dispatch(updatePurchasable),
    }
}
 class BurgerBuilder extends Component {
   
    state={
        
        modalOpen:false,
       
    }

    updatePurchasable=ingredients=>{
        const sum=ingredients.reduce((sum,element)=>{
            return sum+element.amount;
        },0);
        this.setState({purchasable:sum>0})
    }

    addIngredientHandle=type=>{
       this.props.addIngredient(type);
       
    }

    removeIngredientHandle=type=>{
        this.props.removeIngredient(type);
    }

    toggleModal=()=>{
        this.setState({
            modalOpen:!this.state.modalOpen
        })
    }


    handleCheckout=()=>{
        <NavigationToCheckout/>
        //<Link to="/checkout">Users</Link>
        // console.log(this.props);
        // this.props.navigation.navigate('/checkout', null)
        //this.props.history.push("/checkout");
    }

 
    render() {
       
        return (
           
            <div>
                <div className="d-flex flex-md-row flex-column">
                    <Burger ingredients={this.props.ingredients} />
                    <Controls 
                    ingredientsAdded={this.addIngredientHandle}
                    ingredientsRemoved={this.removeIngredientHandle}
                    price={this.state.totalPrice}
                    toggleModal={this.toggleModal}
                    purchasable={this.state.purchasable}
                    />
                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Your Order Summery</ModalHeader>
                    <ModalBody>
                        
                        <h5>Total Price: {this.props.totalPrice.toFixed(0)}</h5>
                        <Summary ingredients={this.props.ingredients} />
                    </ModalBody>
                    <ModalFooter>
                        <NavigationToCheckout />
                        <Button color="secondary" onClick={this.toggleModal}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);