import React, { useContext, useRef , useState} from "react";
import styles from './Form.module.css'
import Input from "./Input";
const Form = props => {
 
const [valid, setValid] = useState(true);

    const amountref = useRef();
    const SubHanlder = e => {
       e.preventDefault();
        

        const entered = amountref.current.value;
        const Nentered = +entered;
        if (entered.trim().length === 0 || Nentered < 1 || Nentered > 5){
            setValid(false);
            return ;

        }
 


        props.onAddToCart(+Nentered); 
       // console.log(+Nentered)
        
            
    }
   

    return (<form   className={styles.form} onSubmit={SubHanlder}>


        <Input label ="amount"  ref = {amountref}input = {{type : 'number' , 
                     id : 'amount',
                     min : '1' , 
                     max : '5',
                     step : '1',
                     defaultValue : '1'
    
    
    
    }}></Input>

       <button >Add to Cart</button>
       {!valid && <p>Please enter a valyue between 1 to 5</p>}
    </form>);
}


export default Form ; 