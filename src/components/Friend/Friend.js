import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, phone, address } = props.friend
    const cart = {
        backgroundColor: "#05f905f7",
        border: "2px solid #21a700",
        margin: "5px",
        padding: "5px",
        borderRadius: "10px"
    }
    const url = `/Friend/${id}`
    const history = useHistory()
    const handleClick = () => {
        history.push(url)
    }
    return (
        <div style={cart}>
            <h2>Name: {name}</h2>
            <h4>Phone: {phone}</h4>
            <p>Location: {address.city}</p>
            <Link to={url}>visit me</Link><br />
            <button onClick={handleClick}>learn more</button>
        </div>
    );
};

export default Friend;