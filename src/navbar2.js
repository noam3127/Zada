import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './dropdown';
import home from './home';


export default () => {
    const [navItems, setNavItems] = useState(
        [
            {
                id: 1, name: "home", isDisplayed: false, dropdownLinks: [{ id: 1, name: "sub1" }, { id: 2, name: "sub2" }, { id: 3, name: "sub3" }]
            },
            {
                id: 2, name: "about", isDisplayed: false, dropdownLinks: [{ id: 1, name: "sub1" }, { id: 2, name: "sub2" }, { id: 3, name: "sub3" }]
            }
        ]
    );

    const dropdownDisplay = (id, shouldDisplay) => {
        const items = navItems.map(item => {
            if (item.id === id) {
                item.isDisplayed = shouldDisplay;
            }
            return item;
        });
        setNavItems(items);
    };

    return (
        <div id="navContainer">
            <ul id="nav">

                {navItems.map(item =>
                    <li key={item.id}
                        onMouseEnter={() => dropdownDisplay(item.id, true)}
                        onMouseLeave={() => dropdownDisplay(item.id, false)}
                    >
                        <a>{item.name}</a>
                        {item.isDisplayed && <Dropdown
                            links={item.dropdownLinks}
                        />}
                    </li>)
                }
            </ul>
        </div >
    );
}

