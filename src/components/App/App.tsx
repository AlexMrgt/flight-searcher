
import Flights from '../Flights/Flights';
import SignIn from '../SignIn/SignIn';
import { Switch, Route, Redirect, } from 'react-router-dom';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser } from '../../Redux/actions/auth';
import { } from '../../Redux/actions/actionCreatrorsTypes/authActionCreatorsTypes';
import { history } from '../../Redux/reducers';
import { isLoggedIn } from '../../Redux/selectors/auth';
import { useEffect } from 'react';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


const App = () => {

  const dispatch = useDispatch();

  const handleLogin = (login: string) => {
    dispatch(loginUser(login));
    history.push('/flights')
  }

  const handleSignOut = () => {
    dispatch(logoutUser());
    history.push('/')
  }

  useEffect(() => {
    const login = localStorage.getItem('login');
    if (login) dispatch(loginUser(login));
  }, [])
  const isAuthorized = useSelector(isLoggedIn);

  return (
    <main className='app'>

      <Route path='/not-found'>
        <NotFoundPage />
      </Route>

      <Switch>

        <Route path='/' exact>
          {isAuthorized &&
            <Redirect to='/flights' />
          }
          <SignIn onSubmit={handleLogin} />
        </Route>

        <ProtectedRoute path='/flights' >
            <Flights onLogout={handleSignOut}/>
        </ProtectedRoute>

        <Route path='*'>
          <Redirect to='/not-found' />
        </Route>

      </Switch>

    </main>
  );
}

export default App;

