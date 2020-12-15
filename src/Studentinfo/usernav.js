import React from 'react';
import {Context} from '.'

const UsersNavbar = () =>{
	let {UserArr, disableInputs} =  React.useContext(Context);
	return(
		<>
			<div className="nav flex-column nav-pills " id="v-pills-tab">
				<a className="nav-link  active d-none" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home">Home</a>
				{
					UserArr.length > 0  ? 
					UserArr.map((each, index)=>(
						<button onClick={disableInputs} className="text-left nav-link btn-light d-flex" style={{outline:"none", border:"none", boxShadow:"none", borderRadius:"0px"}} key={index} id={`v-pills-${index}-tab`} data-toggle="pill" href={`#v-pills-${index}`}>
							<span className="fa fa-user-circle my-auto text-muted ml-md-3 img-responsive" style={{fontSize:"2.5rem"}}></span>
							<div className="ml-3 my-auto">
								<b style={{fontSize:"0.8rem"}}>{each.firstname}</b> <br/>
								<small>{each.email}</small>
							</div>
						</button>
					)) : ""
				}
			</div>
		</>
	)
}

export default UsersNavbar;