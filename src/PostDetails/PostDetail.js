import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetail = () => {
    const { postId } = useParams()
    const [post, setPost] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/1`
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    return (
        <div>
            <h3>post No: {postId}</h3>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetail;