import React from 'react';
import ReactTable from 'react-table';
import { Link, useParams } from 'react-router-dom';
import 'react-table/react-table.css';

const permision_data = [
    {
        permission:"Permission 1"
    },
    {
        permission:"Permission 2"
    },
    {
        permission:"Permission 3"
    },
    {
        permission:"Permission 4"
    },
]

class UserProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:""
        }
        this.data = permision_data;
        this.tableColumns = [
            {
                Header:"Permission",
                accessor:"permission"
            },
            {
                Header:"Create",
                Cell: row => (
                    <button type="button" className="btn btn-green">Create</button>
                 )
            },
            {
                Header:"Read",
                Cell: row => (
                    <button type="button" className="btn btn-indigo">Read</button>
                 )
            },
            {
                Header:"Update",
                Cell: row => (
                    <button type="button" className="btn btn-yellow">Update</button>
                 )
            },
            {
                Header:"Delete",
                Cell: row => (
                    <button type="button" className="btn btn-danger">Delete</button>
                 )
            },
        ]
    }

    componentDidMount(){
        const id = window.location.pathname.slice(window.location.pathname.lastIndexOf('/')+1);
        this.props.userData.map(d => {
            if(d.id == id){
                this.setState({
                    userInfo:d
                })
            }
        })
        

    }
      render(){
        return (
            <div>
                {this.state.userInfo.username}
                <ReactTable data={this.data} columns={this.tableColumns} defaultPageSize={10} className="-highlight" />
            </div>
        )
    }
}

export default UserProfile;