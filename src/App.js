import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error from './Error';
import Navbar from './Navbar';
import AddNewUsers from './Studentinfo/AddNewUsers';
import MainRoute from './Studentinfo';

export default function App(params) {
	return(
		<>
			<Router>
				<Navbar/>
				<Switch>
					<Route exact path="/">
						<AddNewUsers/>
					</Route>

					<Route exact path="/reg">
						<AddNewUsers/>
					</Route>
					<Route exact path="/usersinfo">
						<MainRoute/>
					</Route>
					
					<Route path="*">
						<Error/>
					</Route>
				</Switch>
			</Router>
		</>
	)
};
