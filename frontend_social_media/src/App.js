import './styles/App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.js';
import HomePage from './pages/HomePage.js';

function App() {
    const [user, setUser] = useState('hello');
    useEffect(() => {
        console.log(user);
    }, []);


    return (
        <div className="main-container">

            <BrowserRouter>

                {user === null ? (

                    <LandingPage />
                ) : (
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path='/home' element={<HomePage />} />
                    </Routes>
                )}

            </BrowserRouter>



        </div>
    )
}

export default App;