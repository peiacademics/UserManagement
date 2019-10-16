import React from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, PanelBody } from './../components/panel/panel.jsx';
import UserProfile from '../components/userProfile/userProfile'
class User extends React.Component {
    constructor(props){
        super(props);
    }
	render() {
		return (
			<div>
				{/* <ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/">Home</Link></li>
					<li className="breadcrumb-item active">Active Page</li>
				</ol> */}
				{/* <h1 className="page-header">Home <small>header small text goes here...</small></h1> */}
				<Panel>
					<PanelHeader>Portal 1</PanelHeader>
					<PanelBody>
						<UserProfile userData = {this.props.userData}/>
					</PanelBody>
				</Panel>
			</div>
		)
	}
}

export default User;