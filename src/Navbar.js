import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(params) {
	return(
		<>
			<nav className="navbar navbar-expand-md shadow-sm navbar-light bg-light sticky-top">
				<Link className="navbar-brand text-dark" to="/">STUDENT-DATA APP</Link>
				<button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div id="my-nav" className="collapse navbar-collapse">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/">Home</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
};
