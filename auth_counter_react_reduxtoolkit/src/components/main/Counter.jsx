import { useDispatch, useSelector } from "react-redux";
import classes from './Counter.module.css';
import { counterActions } from "../../store";

const Counter = () => {

    const dispatch = useDispatch();

    const { counterValue } = useSelector(state => state.counterNumber);

    const handlerOnIncrement = () => {
        console.log(counterActions.increment());
        dispatch(counterActions.increment());
    };

    const handlerOnDecrement = () => {
        console.log(counterActions.decrement());
        dispatch(counterActions.decrement());
    };

    const toggleCounterHandler = () => { };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>-- COUNTER VALUE --</div>
            <p> {counterValue} </p>
            {/* Here, we are getting the output as 5 ; */}
            <div className={classes.increase_decrease__btn}>
                <button onClick={handlerOnIncrement}> Increment </button>
                <button onClick={handlerOnDecrement}> Decrement </button>
            </div>

            <button onClick={toggleCounterHandler}>Toggle Counter</button>

        </main>
    );
};

export default Counter;
