import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../redux/actionCreators";

const mapStateToProps = state => {
    return {
        orders: state.orders,
        orderLoading: state.orderLoading,
        orderErr: state.orderErr,

    }
}
const mapDispatchtoProps = dispatch => {
    return {
        fetchOrders: () => dispatch(fetchOrders()),
    }
}
class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrders();
    }

    componentDidUpdate() {
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <p>orders</p>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchtoProps)(Orders);