import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';

import {Route, Routes} from "react-router-dom";


// import and prepend the api url to any fetch calls
import apiURL from '../api';
import Navbar from './Navbar';
import Home from './Home'
import Create from './CreateForm';

export const App = () => {
	return (
		<>
		<main>
			<Navbar />
			<Home />
		</main>
		</>
	)
}