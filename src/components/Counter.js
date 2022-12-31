import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import {counterActions} from '../store/index'
const Counter = () => {

  const counter=useSelector(state=>state.counter.counter)
  const show=useSelector(state=>state.counter.showCounter)
  const dispatch = useDispatch()
  const plusOneHandler=()=>{
    dispatch(counterActions.increment(1))
 
  }
  const plusTwoHandler=()=>{
    dispatch(counterActions.increment(2))
  }

  const minusTwoHandler=()=>{
    dispatch(counterActions.decrement(2))
  }

  const minusOneHandler=()=>{
    dispatch(counterActions.decrement(1))
  }

  const plusFiveHandler=()=>{
    dispatch(counterActions.increment(5))
  }
  const minusFiveHandler=()=>{
    dispatch(counterActions.decrement(5))
  }
 

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>

      <button onClick={plusOneHandler}>+1</button>
      <button onClick={minusOneHandler}>-1</button>
      
      <button onClick={plusTwoHandler}>+2</button>
      <button onClick={minusTwoHandler}>-2</button>

      <button onClick={plusFiveHandler}>+5</button>
      <button onClick={minusFiveHandler}>-5</button>
      </div>
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
