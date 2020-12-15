import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Context} from '.'

const UsersInfo = (props) =>{
	let {index, cond} = props
	let {UserArr, handleEdit, deleteUser} =  React.useContext(Context);


	let init = {firstname:"", lastname:"", phoneNumber:"", email:"", matricNumber:"", department:""}
	if(UserArr.length !== 0){
		init = UserArr[index]
	}
	
	let [UserObj, setUserObj] = useState(init);

	let handleChange = (e) =>{
		let value = e.target.value;
		let name = e.target.name;
		setUserObj({...UserObj, [name]:value});
	}

	return(
		<>
		
		
		<ul className="table-responsive nav nav-pills pb-2 nav-justified border-bottom" id="pills-tab" role="tablist">
			<li className="nav-item">
				<a className="nav-link active" id={`user${index}-home-tab`} data-toggle="pill" href={`#user${index}-home`}>Profile</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" id={`user${index}-profile-tab`} data-toggle="pill" href={`#user${index}-profile`}>Edit Profile</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" id={`user${index}-contact-tab`} data-toggle="pill" href={`#user${index}-contact`}>Settings</a>
			</li>
		</ul>




			<div className="p-2 tab-content userdetail" id="pills-tabContent">
				<div className="row tab-pane fade show active" id={`user${index}-home`}>
					<div className="col-10 p-md-3 mx-auto">
						<div className="mb-4">
							<span className="fa fa-user-circle text-muted ml-md-3 mr-3" style={{fontSize:"5rem"}}></span>
							<span>Email: {UserObj.email}</span>
						</div>
						<div className="row">
							<div className="border mb-4 col-md-5 mx-auto p-4 rounded bg-light col-12">
								Fullname: <br/> <span style={{fontSize:"1.5rem"}}> {UserObj.firstname} {UserObj.lastname}</span>
							</div>
							<div className="border mb-4 col-md-5 mx-auto p-4 rounded bg-light col-12">
								Phone Number: <br/> <span style={{fontSize:"1.5rem"}}> {UserObj.phoneNumber}</span>
							</div>
							<div className="border mb-4 col-md-5 mx-auto p-4 rounded bg-light col-12">
								Matric Number: <br/> <span style={{fontSize:"1.5rem"}}> {UserObj.matricNumber}</span>
							</div>
							<div className="border mb-4 col-md-5 mx-auto p-4 rounded bg-light col-12">
								Department: <br/> <span style={{fontSize:"1.5rem"}}> {UserObj.department}</span>
							</div>
						</div>
					</div>
					
				</div>


				<div class="tab-pane fade" id={`user${index}-profile`}>
					<div className="col-md-10 col-12 mx-auto">
						<div className="mb-4 mx-auto p-2 p-md-4 row">
							<div className="mb-4 mb-md-5 col-md-6 col-12">
								<span>First Name:</span>
								<input name="firstname" onChange={handleChange }  disabled = {cond===false?true:false} className="border-top-0 border-right-0 border-left-0 float-right form-control w-100" value={UserObj.firstname} placeholder="First Name"/> 
							</div>
							<div className="mb-4 mb-md-5 col-md-6 col-12">
								<span>Last Name:</span>
								<input name="lastname" onChange={handleChange} disabled = {cond===false?true:false}  className="border-top-0 border-right-0 border-left-0 float-right form-control w-100" value={UserObj.lastname} placeholder="First Name"/> 
							</div>
							<div className="mb-4 mb-md-5 col-md-6 col-12">
								<span>Email:</span>
								<input name="email" onChange={handleChange} disabled = {cond===false?true:false}  className="border-top-0 border-right-0 border-left-0 w-100 float-right form-control" value={UserObj.email} placeholder="First Name"/>
							</div>

							<div className="mb-4 mb-md-5 col-md-6 col-12">
								<span>Phone Number:</span>
								<input name="phoneNumber" onChange={handleChange} disabled = {cond===false?true:false} className="border-top-0 border-right-0 border-left-0  float-right form-control w-100" value={UserObj.phoneNumber} placeholder="Phone Number"/> 
							</div>
							<div className="mb-4 mb-md-5 col-md-6 col-12">
								<span>Matric Number:</span>
								<input name="matricNumber" onChange={handleChange} disabled = {cond===false?true:false}  className="border-top-0 border-right-0 border-left-0 float-right form-control w-100" value={UserObj.matricNumber} placeholder="Matric Number"/> 
							</div>
							<div className="mb-4 mb-md-5 col-md-6 col-12">
								<span>Department:</span>
								<input name="department" onChange={handleChange} disabled = {cond===false?true:false}  className="border-top-0 border-right-0 border-left-0 float-right form-control w-100" value={UserObj.department} placeholder="Department"/> 
							</div>
						</div>
					</div>
					<div className="col-md-10 col-12 fixed-bottom p-2 mx-auto pb-md-4">
						<button title="Delete User" onClick={()=>deleteUser(index)}  className="btn btn-lg fa fa-trash btn-danger float-right"></button>
						
						<button title={cond === false ? "Edit Profile" : "Save"} onClick={()=>handleEdit(index, UserObj)} className={ cond === false ? "btn btn-lg mr-3 fa fa-edit btn-primary float-right" : "btn btn-lg mr-3 fa fa-save btn-primary float-right"} data-toggle="modal"></button>
					</div>
				</div>
				<div class="tab-pane fade" id={`user${index}-contact`}>

					Settings will come here sha
				</div>
			</div>


		</>
	)
}


export default UsersInfo