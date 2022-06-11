import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Create from './components/Create/Create';
import MyPets from './components/MyPets/MyPets';
import Logout from './components/Logout/Logout';

import { useEffect, useState } from 'react';
import * as authService from './services/authService'

function App() {
    let [userInfo, setUserInfo] = useState({
        isAthenticated : false,
        email : ''
    });

    useEffect(() => {
        const email = authService.getUser();
        setUserInfo({
            isAthenticated : !! email,
            email
        })
    }, []);

    const onLogin = (email) => {
        setUserInfo({
            isAthenticated : true,
            email
        })
    }

    const onLogout = () => {
        setUserInfo({
            isAthenticated : false,
            email : ''
        });
        
    }

    return (
        <div id="container">
            <Header {...userInfo}/>
            <main id="site-content">
                <Routes>
                    <Route path='/' element={<Dashboard/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<Login onLogin = {onLogin}/>}/>
                    <Route path='/details/:id' element={<Details/>}/>
                    <Route path='/edit/:id' element={<Edit/>}/>
                    <Route path='/add-pet' element={<Create/>}/>
                    <Route path='/my-pets' element={<MyPets/>}/>
                    <Route path='/logout' element={<Logout onLogout = {onLogout}/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
