import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink className={({isActive,isPending})=>isActive ? "active-item" : "pending-item" } to= "/">
                        Home
                    </NavLink></li>
                    <li> <NavLink className={({isActive,isPending})=>isActive ? "active-item" : "pending-item" } to="/about">
                        About
                    </NavLink></li>
                    <li> <NavLink className={({isActive,isPending})=>isActive ? "active-item" : "pending-item" } to= "/contact" >
                        Contact
                    </NavLink> </li>
                    <li> <NavLink className={({isActive,isPending})=>isActive ? "active-item" : "pending-item" } to= "/product/10/oil" >
                        Product
                    </NavLink> </li>
                    <li>
                        <NavLink className={({isActive,isPending})=>isActive ? "active-item" : "pending-item" } to="*">
                            Error
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;