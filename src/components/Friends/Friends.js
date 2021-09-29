import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {

    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    const container = {
        display: "grid",
        gridTemplateColumns: "auto auto auto"

    }
    return (
        <div>
            <h2>My Friends: {friends.length}</h2>
            <div style={container}>
                {
                    friends.map(friend => <Friend
                        key={friend.id}
                        friend={friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;