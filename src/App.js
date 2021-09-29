import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import Notfound from './components/Notfound/Notfound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import FriendDetails from './components/FriendDetails/FriendDetails';
import PostDetail from './PostDetails/PostDetail';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route path="/home">
						<Home></Home>
					</Route>
					<Route path="/about">
						<About></About>
					</Route>
					<Route path="/friends">
						<Friends></Friends>
					</Route>
					<Route path="/Friend/:friendId">
						<FriendDetails></FriendDetails>
					</Route>
					<Route path="/post/:postId">
						<PostDetail></PostDetail>
					</Route>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route>
						<Notfound></Notfound>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
