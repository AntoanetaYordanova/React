import './App.css';
import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import Catalog from './components/Catalog';
import Create from './components/Create';
import Login from './components/Login';
import Register from './components/Register';
import PageNotFound from './components/PageNotFound';
import Details from './components/Details';
import { Route, Redirect } from 'react-router-dom'

function App() {

    return (
        <div id="box">
            <Header/>
            <main id="main-content">
              <Route path={'/'} exact component={WelcomeWorld}/>
              <Route path={'/catalog'} component={Catalog}/>
              <Route path={'/create'} component={Create}/>
              <Route path={'/login'} component={Login}/>
              <Route path={'/register'} component={Register}/>
              <Route path={'/details/:id'} component={Details}/>
              <Route path={'/custom'}>
                  <h1>Custom route</h1>
              </Route>
              <Route path={'/logout'} render={() => {
                  console.log('Logged out');
                  return <Redirect to="/"/>
              }} />
            </main> 
        </div>
    );
}

export default App;
