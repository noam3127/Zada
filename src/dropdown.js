import React from 'react';


export default (props) => {
    return (
        props.links.map(link => <li key={link.id}>{link.name}</li>)
    );
}