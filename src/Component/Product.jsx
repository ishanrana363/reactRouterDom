import React from 'react';
import Menu from "../Component/Menu.jsx";
import {useParams} from "react-router-dom";

const Product = () => {
    const {id,name} = useParams()
    return (
        <div>
            <Menu/>
            <h1>Id : {id} </h1>
            <h1> Name : {name} </h1>
            <h1>This is Product page </h1>
        </div>
    );
};

export default Product;