import { useNavigate } from "react-router-dom";
import {Button} from 'reactstrap';

export function NavigationToCheckout() {
    let navigate = useNavigate();
    function handleClick() {
      navigate("/checkout");
    }
    return (
      
        <Button  style={{
          backgroundColor:"#d70F64",
          
      }}  onClick={handleClick}>Continute To Checkout</Button>
      
    );
  }

 export function NavigationToRoot() {
    let navigate = useNavigate();
    function handleClick() {
      navigate("/");
    }
    return (
      
        <Button  style={{
          backgroundColor:"#d20F23",
          
      }}  onClick={handleClick}>Go back</Button>
      
    );
  }
