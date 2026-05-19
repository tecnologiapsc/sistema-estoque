import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboad from '../pages/Dashboard';

import PrivateRoute from './PrivateRoute';


export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                element={<Login />}
                />

                <Route path="/dashboard"
                element={
                    <PrivateRoute>

                        <Dashboad />
                        
                    </PrivateRoute>
                }
                />
            </Routes>
        </BrowserRouter>
    )
}