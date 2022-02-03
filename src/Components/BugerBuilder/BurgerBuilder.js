import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";
import { Modal,ModalBody,ModalHeader,ModalFooter,Button } from "reactstrap";
import Summary from "./Summary/Summary";
import NavigationToCheckout from "./Navigation/CheckoutNavigation";

const INGREDIENT_PRICES={
    salad:20,
    cheese:40,
    meat:90
}

export default class BurgerBuilder extends Component {
   
    state={
        ingredients:[
            {
                type:'salad', amount:0
            },
            {
                type:'cheese', amount:0
            },
            {
                type:'meat', amount:0
            },
          
        ],
        totalPrice:80,
        modalOpen:false,
        purchasable:false,
    }

    updatePurchasable=ingredients=>{
        const sum=ingredients.reduce((sum,element)=>{
            return sum+element.amount;
        },0);
        this.setState({purchasable:sum>0})
    }

    addIngredientHandle=type=>{
       const ingredient=[...this.state.ingredients];
       const newPrice=this.state.totalPrice+INGREDIENT_PRICES[type];
       for(let item of ingredient){
           if(item.type===type) item.amount++;
       }
       this.setState({ingredient:ingredient,totalPrice:newPrice});
       this.updatePurchasable(ingredient);
    }

    removeIngredientHandle=type=>{
        const ingredient=[...this.state.ingredients];
        const newPrice=this.state.totalPrice-INGREDIENT_PRICES[type];
        for(let item of ingredient){
            if(item.type===type) {
                if(item.amount<=0) return;
                item.amount--;
            }
        }
        this.setState({ingredient:ingredient,totalPrice:newPrice});
        this.updatePurchasable(ingredient);
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
                    <Burger ingredients={this.state.ingredients} />
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
                        
                        <h5>Total Price: {this.state.totalPrice.toFixed(0)}</h5>
                        <Summary ingredients={this.state.ingredients} />
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