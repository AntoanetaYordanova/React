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

function App() {
    return (
        <div id="container">
            <Header/>
            <main id="site-content">
                <Routes>
                    <Route path='/' element={<Dashboard/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/details/:id' element={<Details/>}/>
                    <Route path='/edit/:id' element={<Edit/>}/>
                    <Route path='/add-pet' element={<Create/>}/>
                    <Route path='/my-pets' element={<MyPets/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
