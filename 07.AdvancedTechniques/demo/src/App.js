import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Login from './components/Login';

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <Header />
                <div className='wrapper'>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </div>
        </AuthProvider>
    );
}

export default App;
