import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./login/login";
import AdminApp from "./adminApp";
import UserApp from './userApp';


function Routers() {
	// const user = localStorage.getItem("token");

	return (
		<>
    <Router>
		<Switch>
			{/* {user && <Route path="/" ><Main /> </Route>} */}
			<Route exact path="/admin"><AdminApp/></Route> 
			<Route exact path="/login"> <Login /> </Route> 
            <Route exact path="/user"><UserApp/></Route> 
            <Route path="/" > <Redirect to="/login" /> </Route>
		</Switch>
	</Router>
		</>
	);
}

export default Routers;

