import './App.css';
import './components/Home/Home.jsx'
import { Routes,Route } from 'react-router-dom'
import {AuthProvder} from './contexts/AuthContext.jsx'

import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {

    return (

        <AuthProvder>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register />} />
            </Routes>

        </AuthProvder>

    );
    
}

export default App;