import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {

  const counter=useSelector(state=>state.counter)
  const dispatch = useDispatch()
  const plusOneHandler=()=>{
    dispatch({type:'increment'})
 
  }
  const plusTwoHandler=()=>{
    dispatch({type:'incrementByTwo'})
  }

  const minusTwoHandler=()=>{
    dispatch({type:'decrementByTwo'})
  }

  const minusOneHandler=()=>{
    dispatch({type:'decrement'})
  }

  const plusFiveHandler=()=>{
    dispatch({type:'incrementByFive'})
  }
  const minusFiveHandler=()=>{
    dispatch({type:'decrementByFive'})
  }
 

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
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
