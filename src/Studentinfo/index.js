import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import UsersInfo from './userinfo'
import UsersNavbar from './usernav'
import "./mystyle.css"

export let Context = createContext();

const MainRoute = (params) => {

	let history = useHistory();
	let initArr = []
	if(localStorage.getItem("myUsersArray") === null){
		localStorage.setItem("myUsersArray", "");
	} 
	if(localStorage.getItem("myUsersArray") !== ""){
		// my array if the localStorage is not empty
		initArr = JSON.parse(localStorage.getItem("myUsersArray"))
	}
	let [UserArr, setUserArr] = useState(initArr);
	let [cond, setCond] = useState(false);

	const handleEdit = (index, userObj) =>{
		setCond(true);
		if(cond === true){
			let {firstname, lastname, phoneNumber, email, matricNumber, department} = userObj;
			let newUsersArray = UserArr.map((each, l)=>l === index ? {...each, firstname, lastname, phoneNumber, email, matricNumber, department}: each);
			setUserArr(newUsersArray);
			localStorage.setItem("myUsersArray", JSON.stringify(newUsersArray));
			setCond(false);
		}
	}

	const deleteUser = (index) =>{
		let nU = UserArr.filter((each, i)=>i !== index)
		setUserArr(nU);
		localStorage.setItem("myUsersArray", JSON.stringify(nU));

	}
	const disableInputs = () =>{
		if(cond === true){
			setCond(false)
		}
	}
	return(
		<>
			{
				UserArr.length > 0 ?
				<Context.Provider value={{UserArr:UserArr, handleEdit:handleEdit, deleteUser:deleteUser, disableInputs:disableInputs}}>
					<div className="container-fluid">
						<div className="row" style={{height:"300px"}}>
							<div className="col-3 userNav p-0 rounded mainside bg-light">
								<div className="p-3 w-100">
									<span className="h3 ml-md-3 p-2 mt-md-2">Students</span>
									<Link title="Add New User" className=" btn mr-md-3 btn-lg fa fa-plus btn-light shadow-sm float-right" to="/reg"></Link>
								</div>
								<UsersNavbar/>
							</div>
							<div className="p-2 col-9 maincont">
								<div className="tab-content">
									<h4 className="p-md-4 tab-pane fade show active" id="v-pills-home">Click on Student First Names to see their Details</h4>
								{
									UserArr.length !== 0 ?
									UserArr.map((each, i)=>(
											<div key={i} className="form-inline maintab tab-pane fade" id={`v-pills-${i}`}>
												<UsersInfo cond={cond} index={i}/>
											</div>
									)) : ""
								}
								</div>
							</div>
						</div>
						
					</div>
				</Context.Provider> : history.push('/reg')
			}
		</>
	)
};


export default MainRoute