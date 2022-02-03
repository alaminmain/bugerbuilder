import { useNavigate } from "react-router-dom";
import {Button} from 'reactstrap';

function NavigationToCheckout() {
    let navigate = useNavigate();
    function handleClick() {
      navigate("/checkout");
    }
    return (
      
        <Button color="success"  onClick={handleClick}>Continute To Checkout</Button>
      
    );
  }

export default NavigationToCheckout; 