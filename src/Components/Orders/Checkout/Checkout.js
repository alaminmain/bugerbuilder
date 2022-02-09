import React, { Component } from "react";
import { Button } from "reactstrap";
import {connect} from 'react-redux';
import axios from 'axios';

const mapStateToProps=state=>{
    return{
        ingredients:state.ingredients,
        totalPrice:state.totalPrice,
        purchasable:state.purchasable
    }
}

class Checkout extends Component
{
    state={
        values:{
            deliveryAddress:"",
            phone:"",
            paymentType:"cash on delivery"
        }
    }

    goBack=()=>{
        //go back hobe
    }

    inputChangeHandler=(e)=>{
        this.setState({
            values:{
                ...this.state.values,
                [e.target.name]:e.target.value,
            }
        })
    }

    submitHandler=()=>{

        const order={
            ingredients:this.props.ingredients,
            customer:this.state.values,
            price:this.props.totalPrice,
            orderTime:new Date(),
        }
        axios.post("https://burger-builder-248c7-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",order)
        .then(response=>console.log(response))
        .catch(err=>console.log(err));
        //console.log(order);
    }

    render(){
        return(
            <div>
                <h4 style={{
                    border:"1px solid grey",
                    boxShadow:"1px 1px #888888",
                    borderRadius:"5px",
                    padding:"20px"
                }}>Payment : {this.props.totalPrice} BDT</h4>
                <form style={{
                    border:"1px solid grey",
                    boxShadow:"1px 1px #888888",
                    borderRadius:"5px",
                    padding:"20px"
                }} >
                    <textarea name="deliveryAddress" value={this.state.values.deliveryAddress}
                    className="form-control" placeholder="your delivery address" onChange={(e)=>this.inputChangeHandler(e)}></textarea>
                    <br>
                    </br>
                    <input name="phone" className="form-control" placeholder="your phone number" value={this.state.values.phone} onChange={(e)=>this.inputChangeHandler(e)}/>
                    <br>
                    </br>
                    <select name="paymentType" className="form-control" value={this.state.values.paymentType} onChange={(e)=>this.inputChangeHandler(e)}>
                        <option value="cash on delivery">Cash on Delivery</option>
                        <option value="Bkash">Bkash</option>
                    </select>
                    <br />
                    <Button style={{backgroundColor:"#d70f64"}} className="mr-auto" onClick={this.submitHandler}
                    disabled={!this.props.purchasable} 
                    >Place Order</Button>
                    <Button color="secondary" className="ml-1" onClick={this.goBack} >Cancle
                    </Button>
                </form>
            </div>
        )
    }
}


export default connect(mapStateToProps) (Checkout);