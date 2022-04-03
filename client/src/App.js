import React from 'react';
import Insert from './Insert';
import SearchPost from './Components/search'
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
return (
	<Router>
 	<Navbar />
 	<Routes>
 		<Route path='/Insert' element={<Insert/>} />
 		<Route path='/Components/search' element={<SearchPost/>} />
 	</Routes>
 	</Router>
);
}

export default App;
