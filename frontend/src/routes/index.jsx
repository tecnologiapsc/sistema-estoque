import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products';
import Login from '../pages/Login';


export default function AppRoutes() {
    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path='/'
                    element={<Dashboard />}               
                />

                <Route
                    path='/'
                    element={<Products />}               
                />

                <Route
                    path='/'
                    element={<Login />}               
                />

            </Routes>

        </BrowserRouter>
    )
}