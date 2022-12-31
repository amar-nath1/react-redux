import { Fragment } from 'react';
import Counter from './components/Counter';
import Headers from './components/Header'
import Auth from './components/Auth'
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile'

function App() {

  const isLoggedIn=useSelector((state)=>state.auth.authenticated)
  return (
    <Fragment>
      <Headers></Headers>
      {!isLoggedIn && <Auth></Auth>}
      {isLoggedIn && <UserProfile></UserProfile>}
    <Counter />
    </Fragment>
  );
}

export default App;
