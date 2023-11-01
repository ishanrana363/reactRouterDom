import React from 'react';
import ReactRouterDom from "./Component/ReactRouterDom.jsx";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Home from "./Component/Home.jsx";
import About from "./Component/About.jsx";
import Contact from "./Component/Contact.jsx";
import Product from "./Component/Product.jsx";
import NotFound from "./Component/NotFound.jsx";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path= "/" element={<Home/>} />
                    <Route path= "/about/" element={<About/>} />
                    <Route path= "/contact" element={<Contact/>} />
                    <Route path="/product/:id/:name" element={<Product/>} />
                    <Route path= "*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;