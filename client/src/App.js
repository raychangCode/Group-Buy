import React from 'react';
import Insert from './Insert';
import SearchPost from './Components/search'
import Info from './Components/Info';
import Update from './Components/Update'
import Analysis from './Components/Analysis';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from "./Header";


function App() {
	return (

		<Router>
			<Header />
			<Navbar />
			<Routes>

				<Route path='/Insert' element={<Insert />} />
				<Route path='/Components/search' element={<SearchPost />} />
				<Route path='/Components/Info' element={<Info />} />
				<Route path='/Components/Update' element={<Update />} />
				<Route path='/Components/Analysis' element={<Analysis />} />
			</Routes>
		</Router>

	);
}

export default App;
