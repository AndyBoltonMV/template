import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';

import {Route, Routes} from "react-router-dom";
// import apiURL from '../api';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import Navbar from './Navbar';
import Home from './Home'
import Create from './CreateForm';




export const App = () => {

	const [items, setItems] = useState([]);

	async function fetchItems(){
		try {
			console.log("This happens")
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setItems(itemsData);

		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems();
	}, []);


	return (
		<>
	      <Navbar />
			<div className="container">
				
				<Routes>
					<Route path="/" element ={<ItemsList items={items} />} />
					<Route path="/createitem" element ={<Create />} />
				</Routes>

			</div>
		</>
	)
}