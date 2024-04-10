import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../pages';

export const RouterPages = () => {
    
    return (
        <>
            <Router>
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