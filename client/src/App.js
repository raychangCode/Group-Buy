import React from 'react';
import Insert from './Insert';
import SearchPost from './Components/search'
import Update from './Components/Update'
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from "./Header";


function App() {
return (
	
	<Router>
	<Header />
 	<Navbar />
 	<Routes>
	 
 		<Route path='/Insert' element={<Insert/>} />
 		<Route path='/Components/search' element={<SearchPost/>} />
		<Route path='/Components/Update' element={<Update/>} />
 	</Routes>
 	</Router>
	 
);
}

export default App;
