import { useDispatch, useSelector } from "react-redux";
import classes from './Counter.module.css';
import { counterActions, togglerActions } from "../../store";

const Counter = () => {

    const dispatch = useDispatch();

    const { counterValue } = useSelector(state => state.counterNumber);

    const showCounter = useSelector(state => state.hide);

    const handlerOnIncrement = () => {
        console.log(counterActions.increment());
        dispatch(counterActions.increment());
    };

    const handlerOnDecrement = () => {
        console.log(counterActions.decrement());
        dispatch(counterActions.decrement());
    };

    const toggleCounterHandler = () => {
        dispatch(togglerActions.toggulous());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>-- COUNTER VALUE --</div>
            {showCounter && <p> {counterValue} </p>}
            {/* Here, we are getting the output as 5 ; */}
            {showCounter && <div className={classes.increase_decrease__btn}>
                <button onClick={handlerOnIncrement}> Increment </button>
                <button onClick={handlerOnDecrement}> Decrement </button>
            </div>}

            <button onClick={toggleCounterHandler}>Toggle Counter</button>

        </main>
    );
};

export default Counter;
