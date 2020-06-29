import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './dropdown';
import home from './home';


export default () => {
    const [navItems, setNavItems] = useState(
        [
            {
                id: 1, name: "home", dropdownLinks: [{ id: 1, name: "sub1" }, { id: 2, name: "sub2" }, { id: 3, name: "sub3" }]
            },
            {
                id: 2, name: "about", dropdownLinks: [{ id: 1, name: "sub1" }, { id: 2, name: "sub2" }, { id: 3, name: "sub3" }]
            }
        ]
    );

    const [showDropdown, setShowDropdown] = useState([]);
    useEffect(() => {
        const initDropdown = [];

        navItems.forEach(item => {

            initDropdown[item.id] = false;
            console.log(initDropdown)
        });

        setShowDropdown(initDropdown);
        console.log(showDropdown)

    }, []);


    const dropdownDisplay = (item) => {
        let newShowDropdown = showDropdown;
        newShowDropdown[item.id] = !newShowDropdown[item.id];
        setShowDropdown(newShowDropdown);

    }

    return (
        <div id="navContainer">
            <ul id="nav">

                {navItems.map(item => <li key={item.id} onMouseEnter={() => dropdownDisplay(item)}><a>{item.name}</a>
                    {showDropdown[item.id] ? <Dropdown
                        links={item.dropdownLinks}
                    /> : null}
                </li>)
                }
            </ul>
        </div >
    );
}

