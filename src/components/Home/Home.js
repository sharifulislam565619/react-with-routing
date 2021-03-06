import React, { useEffect, useState } from 'react';
import Posts from '../../Posts/Posts';

const Home = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h2>This is home page</h2>
            {
                posts.map(post => <Posts
                    key={post.id}
                    post={post}
                ></Posts>)
            }
        </div>
    );
};

export default Home;