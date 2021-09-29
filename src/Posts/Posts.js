import { NavLink } from 'react-router-dom';

const Posts = (props) => {

    const { title, id } = props.post

    return (
        <div>
            <h2>{title}</h2>
            <NavLink to={`/post/${id}`}>learn more</NavLink>
        </div>
    );
};

export default Posts;