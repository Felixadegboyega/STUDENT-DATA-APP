import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const  AddNewUsers = () => {
	let history = useHistory();
	if(localStorage.getItem("myUsersArray") === null){
		localStorage.setItem("myUsersArray", "");
	} 
	let getmyUsers = []
	if(localStorage.myUsersArray != ""){
		getmyUsers = JSON.parse(localStorage.getItem("myUsersArray"));
	} else{
		history.push('/reg');
	}
	let [theUsers, setTheUsers] = useState(getmyUsers);
	let [UserObj, setUserObj] = useState({firstname:"", lastname:"", phoneNumber:"", email:"", matricNumber:"", department:""});

	let handleChange = (e) =>{
		let value = e.target.value;
		let name = e.target.name;
		setUserObj({...UserObj, [name]:value});
	}
	let addUser = () =>{
		if(UserObj.firstname !== "" && UserObj.lastname !== "" && UserObj.phoneNumber !== "" && UserObj.email !== "" && UserObj.matricNumber!=="" && UserObj.department !== ""){
			let users = [...theUsers, UserObj];
			setTheUsers(users);
			localStorage.setItem("myUsersArray", JSON.stringify(users));
			setUserObj({firstname:"", lastname:"", phoneNumber:"", email:"", matricNumber:""});
			
		} else {
			alert("hey")
		}
	}

	return(
		<>
			<div className="container-fluid">
				<div className="row p-2 p-md-4">
					<div className="col-10 col-md-4 m-auto card p-0">
						<div className="card-header">
							<h4 className="card-title">Add New for Users</h4>
						</div>
						<div className="card-body">
							<input type="text" name="firstname" onChange={handleChange} value={UserObj.firstname} placeholder="First Name" className="form-control mb-3"/>
							<input type="text" name="lastname" onChange={handleChange} value={UserObj.lastname} placeholder="Last Name" className="form-control mb-3"/>
							<input type="text" name="phoneNumber" onChange={handleChange} value={UserObj.phoneNumber} placeholder="Phone Number" className="form-control mb-3"/>
							<input type="email" name="email" onChange={handleChange} value={UserObj.email} placeholder="Email" className="form-control mb-3"/>
							<input type="text" name="department" onChange={handleChange} value={UserObj.department} placeholder="Department" className="form-control mb-3"/>
							<input type="text" name="matricNumber" onChange={handleChange} value={UserObj.matricNumber} placeholder="Matric Number" className="form-control mb-3"/>
						</div>
						<div className="card-footer">
							<button className="btn mr-3 btn-primary" onClick={addUser}>Add</button>
							<Link to={`/usersinfo`} className="btn mr-3 btn-secondary">View</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
};


export default AddNewUsers
