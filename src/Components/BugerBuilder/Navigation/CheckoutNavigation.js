import { useNavigate } from "react-router-dom";
import {Button} from 'reactstrap';

function NavigationToCheckout() {
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

export default NavigationToCheckout; 