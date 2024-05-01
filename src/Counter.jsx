import { useState } from "react";

function Counter(){

    const [count,setCount] = useState(0);
    const Decrement = () =>{
        setCount(count-1);
    }
    const Reset = () =>{
        setCount(0);
    }
    const Increment = () =>{
        setCount(count+1);
    }
    return(
        <>
            <p className="counter">{count}</p>
            <div className="container">
                <button className = 'buttons' onClick={Decrement}>Decrement</button>
                <button className = 'buttons' onClick={Reset}>Reset</button>
                <button className = 'buttons' onClick={Increment}>Increment</button>
            </div>
        </>
    );
}

export default Counter;