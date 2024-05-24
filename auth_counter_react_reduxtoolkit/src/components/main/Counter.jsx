import { useSelector } from "react-redux";
import classes from './Counter.module.css';

const Counter = () => {

    const { counterValue } = useSelector(state => state.counterNumber);

    const toggleCounterHandler = () => { };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>-- COUNTER VALUE --</div>
            <p> {counterValue} </p>
            {/* Here, we are getting the output as 5 ; */}
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
