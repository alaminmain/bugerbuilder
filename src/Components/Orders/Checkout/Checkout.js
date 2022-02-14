import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { connect } from 'react-redux';
import axios from 'axios';
import Spinner from "../../Spinner/Spinner";
import { resetIngridents } from "../../../redux/actionCreators";
import { NavigationToRoot } from "./../../BugerBuilder/Navigation/CheckoutNavigation";
const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchasable: state.purchasable,
        userId: state.userId,
        token: state.token,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetIngridents: () => dispatch(resetIngridents())
    }
}

class Checkout extends Component {
    state = {
        values: {
            deliveryAddress: "",
            phone: "",
            paymentType: "cash on delivery"
        },
        isLoading: false,
        isModalOpen: false,
        modalMsg: ""
    }

    goBack = () => {
        <NavigationToRoot />
    }

    inputChangeHandler = (e) => {
        this.setState({
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value,
            }
        })
    }

    submitHandler = () => {
        this.setState({ isLoading: true });
        const order = {
            ingredients: this.props.ingredients,
            customer: this.state.values,
            price: this.props.totalPrice,
            orderTime: new Date(),
            userId: this.props.userId,
        }
        axios.post("https://burger-builder-248c7-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json?auth=" + this.props.token, order)
            .then(response => {
                if (response.status === 200) {
                    this.setState({
                        isLoading: false,
                        isModalOpen: true,
                        modalMsg: "Order place Successfully!",
                    })
                    this.props.resetIngridents();
                }
                else {
                    this.setState({
                        isLoading: false,
                        isModalOpen: true,
                        modalMsg: "Something went wrong! order Again",
                    })
                }
            })
            .catch(err => {
                this.setState({
                    isLoading: false,
                    isModalOpen: true,
                    modalMsg: "Something went wrong! order Again",
                })
            });
        //console.log(order);
    }

    render() {
        let form = (<div>
            <div>
                <h4 style={{
                    border: "1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "20px"
                }}>Payment : {this.props.totalPrice} BDT</h4>
                <form style={{
                    border: "1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "20px"
                }} >
                    <textarea name="deliveryAddress" value={this.state.values.deliveryAddress}
                        className="form-control" placeholder="your delivery address" onChange={(e) => this.inputChangeHandler(e)}></textarea>
                    <br>
                    </br>
                    <input name="phone" className="form-control" placeholder="your phone number" value={this.state.values.phone} onChange={(e) => this.inputChangeHandler(e)} />
                    <br>
                    </br>
                    <select name="paymentType" className="form-control" value={this.state.values.paymentType} onChange={(e) => this.inputChangeHandler(e)}>
                        <option value="cash on delivery">Cash on Delivery</option>
                        <option value="Bkash">Bkash</option>
                    </select>
                    <br />
                    <Button style={{ backgroundColor: "#d70f64" }} className="mr-auto" onClick={this.submitHandler}
                        disabled={!this.props.purchasable}
                    >Place Order</Button>
                    <NavigationToRoot />
                </form>
            </div>
        </div>)
        return (
            <div>
                {this.state.isLoading ? <Spinner /> : form}
                <Modal isOpen={this.state.isModalOpen} >
                    <ModalBody>
                        <p>{this.state.modalMsg}</p>
                        <NavigationToRoot />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);