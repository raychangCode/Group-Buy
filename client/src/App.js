import React from 'react';
import Insert from './Insert';
import SearchPost from './Components/search'
import Info from './Components/Info';
import Update from './Components/Update'
import Analysis from './Components/Analysis';
import Navbar from './Components/Navbar';
import Header from "./Header";
import Home from "./Components/Page/Home"
import "./App.css";
import Post from './Components/Post';

import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';


function App() {
	return (
		<Router>
			<div class="page-container">
				<div class="content-wrap">
					<Header />
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/Insert' element={<Insert />} />
						<Route path='/Components/search' element={<SearchPost />} />
						<Route path='/Components/Info' element={<Info />} />
						<Route path='/Components/Update' element={<Update />} />
						<Route path='/Components/Analysis' element={<Analysis />} />
						<Route exact path='/Components/Post/:id' element={<Post />} />
					</Routes>

				</div>
			</div>
			<footer>
				<div class="footer">
					<br></br>
					<br></br>
					<p>Author: <a href='https://www.linkedin.com/in/shwu02/' target="_blank" rel="noopener noreferrer">Ken Wu</a>,
					<a href='https://www.linkedin.com/in/jui-ting-ray-chang/' target="_blank" rel="noopener noreferrer">Ray Chang</a>,
					<a href='https://www.linkedin.com/in/thomas-yenshuo-huang/' target="_blank" rel="noopener noreferrer">Thomas Huang</a>,
					<a href='https://www.linkedin.com/in/meg-chia-chien-wu/' target="_blank" rel="noopener noreferrer">Meg Wu</a></p>
					<p><a href="https://illinois.edu/" target="_blank" rel="noopener noreferrer">University of Illinois Urbana-Champaign</a></p>
				</div>
			</footer>
		</Router>
	);
}

export default App;
