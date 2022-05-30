import './App.css';
import { useState } from 'react'
import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import Catalog from './components/Catalog';
import Create from './components/Create';
import Login from './components/Login';
import Register from './components/Register';
import PageNotFound from './components/PageNotFound';
import Details from './components/Details';


function App() {
  
const navChangeHandler = (path) => {
  changePath(path)
 }
const [ path, changePath] = useState('/');

const routes = {
  '/' : <WelcomeWorld/>,
  '/catalog' : <Catalog changePage = {navChangeHandler}/>,
  '/create' : <Create/>,
  '/login' : <Login/>,
  '/register' : <Register/>,
  '/details' : <Details/> 
}

    return (
        <div id="box">
            <Header navChangeHandler = {navChangeHandler}/>
            <main id="main-content">
              { (routes[path]) || <PageNotFound/>}
            </main> 
        </div>
    );
}

export default App;
