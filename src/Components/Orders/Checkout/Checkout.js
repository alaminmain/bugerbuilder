import React, { Component } from "react";
import { Button } from "reactstrap";

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
        console.log(this.state.values);
    }

    render(){
        return(
            <div>
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
                    <Button style={{backgroundColor:"#d70f64"}} className="mr-auto" onClick={this.submitHandler}>Place Order</Button>
                    <Button color="secondary" className="ml-1" onClick={this.goBack} >Cancle
                    </Button>
                </form>
            </div>
        )
    }
}


export default Checkout;