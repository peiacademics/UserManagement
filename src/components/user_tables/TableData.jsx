import React from 'react';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';
import 'react-table/react-table.css';



class TableData extends React.Component{
    constructor(props){
        super(props);
        this.data = this.props.userData;
        this.handleClick = this.handleClick.bind(this);
        this.tableColumns = [
            {
                Header:"S.no",
                accessor:"id"
            },
            {
                Header:"Username",
                accessor:"username"
            },
            {
                Header:"E-mail",
                accessor:"email"
            },
            {
                Header:"Manage",
                accessor:"id",
                Cell: row => (
                   <Link to={'/user/'+row.value}> <button type="button" className="btn btn-green">Manage</button></Link>
                )
            },
        ]
    
    }

    handleClick(){
        alert("hi")
    }
    render() {
        return (
            <div>
                <ReactTable filterable data={this.data} columns={this.tableColumns} defaultPageSize={10} className="-highlight" />
            </div>
        )
    }
    
}
export default TableData;