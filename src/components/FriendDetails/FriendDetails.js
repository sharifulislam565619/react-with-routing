import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';


const FriendDetails = () => {
    const { friendId } = useParams()
    const [friend, setFriend] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    const history = useHistory()
    const handleClick = () => {
        history.push('/friends')
    }
    return (
        <div>
            <h2>Name: {friend.name}</h2>
            <p>Phone: {friend.phone}</p>
            <p>Address: {friend.address?.city}</p>
            <button onClick={handleClick}>Go back</button>
        </div>
    );
};

export default FriendDetails;