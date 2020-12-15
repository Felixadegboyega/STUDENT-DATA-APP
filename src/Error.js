import React from 'react';
import { Link } from 'react-router-dom';

export default function Error(params) {
	return(
		<>
			<h3 className="p-5">Page Not Found ☹☹☹	</h3>
			<Link to="/" className="btn btn-block btn-info fa fa-plus"> Add Student</Link>
		</>
	)
};
