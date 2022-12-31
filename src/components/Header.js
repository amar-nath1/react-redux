import { useDispatch } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../store/index';
import { useSelector } from 'react-redux';
const Header = () => {

const isLoggedIn=useSelector((state)=>state.auth.authenticated)

const dispatch=useDispatch()
  const logoutHandler=()=>{

    dispatch(authActions.logout())

  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
      {isLoggedIn && <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
           <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>}
      </nav>
    </header>
  );
};

export default Header;
