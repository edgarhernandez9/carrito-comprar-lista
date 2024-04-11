import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {NavBar} from 'components/NavBar';
import Home from '../pages';
// import {NavBar} from 'carrito_compras/NavBar'

export const RouterPages = () => {
    
    return (
        <>
        {/* <NavBar /> */}
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/car' >
                        <Route path='/car' element={ <Home />} />
                        {/* <Route path='/compras' element={} /> */}
                    </Route>
                    
                </Routes>
            </Router>
        </>
    );
}