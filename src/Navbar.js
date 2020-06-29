import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import home from './home';


export default () => {
    const [navItems] = useState(
        [
            {
                id: 1, name: "home", dropdownLinks: [{ id: 1, name: "sub1" }, { id: 2, name: "sub2" }, { id: 3, name: "sub3" }]
            },
            {
                id: 2, name: "about", dropdownLinks: [{ id: 1, name: "sub1" }, { id: 2, name: "sub2" }, { id: 3, name: "sub3" }]
            }
        ]
    );



    // const [showDropdown, setShowDropdown] = useState([]);

    const [dropdownStyle, setDropdownStyle] = useState([]);

    useEffect(() => {
        const initStyle = [];

        navItems.forEach(item => {

            initStyle[item.id] = 'none';
            console.log(initStyle)
        });

        setDropdownStyle(initStyle);

    }, []);



    // useEffect(() => {
    //     const initDropdown = [];

    //     navItems.forEach(item => {

    //         initDropdown[item.id] = false;
    //         console.log(initDropdown)
    //     });

    //     setShowDropdown(initDropdown);

    // }, []);



    const dropdown = (id) => {
        console.log(id)
        // let tempArray = [...showDropdown];
        // tempArray[item.id] = true;
        // setShowDropdown(tempArray);
        // console.log('tempArrayItemid', tempArray[item.id])

        // dropdownStyle[item.id] = 'block';
        // console.log(dropdownStyle[item.id])
        let tempArray = [...dropdownStyle];
        console.log('1', tempArray)
        tempArray[id] = 'inline-block';
        console.log('2', tempArray)
        setTimeout(function () { setDropdownStyle(tempArray); }, 300);

        console.log('3', dropdownStyle)
    }

    const notDropdown = (id) => {
        console.log(id)
        // let tempArray = [...showDropdown];
        // tempArray[item.id] = false;
        // setShowDropdown(tempArray);
        // console.log('tempArrayItemid', tempArray[item.id])

        // dropdownStyle[item.id] = 'none';
        // console.log(dropdownStyle[item.id])
        // console.log(item.id)
        let tempArray = [...dropdownStyle];
        // console.log('1', tempArray)
        tempArray[id] = 'none';
        // console.log('2', tempArray)
        setTimeout(function () { setDropdownStyle(tempArray); }, 300);
        // console.log('3', dropdownStyle)
    }

    // const setDropdown = (item) => {
    //     if (showDropdown) {
    //         return showDropdown[item.id] === true ? <ul class="dropdown">
    //             {item.dropdownLinks.map(link => <li key={link.id}> <NavLink exact to="/">{link.name}</NavLink></li>)}
    //         </ul> : null;
    //     }
    // }

    // let dropdownStyle = [];
    // dropdownStyle[0] = 'block';
    // console.log(dropdownStyle[0])

    return (
        <div id="navContainer">

            <ul id="nav">
                {navItems.map(item =>
                    <div id="wrapper">

                        <li key={item.id} onMouseEnter={() => dropdown(`${item.id}`)} onMouseOut={() => notDropdown(`${item.id}`)}><a>{item.name}</a>

                        </li>
                        <ul style={{ display: `${dropdownStyle[+item.id]}` }} className="theDropdown">
                            {item.dropdownLinks.map(link => <li key={link.id}> <NavLink exact to="/">{link.name}</NavLink></li>)}
                        </ul>
                    </div>
                )}
            </ul>
        </div>

    );
}
