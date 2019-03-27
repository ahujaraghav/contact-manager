import React from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'

class ContactList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            contacts:[]
        }
    }

    componentDidMount(){
        axios.get("/contacts")
        .then((response)=>{
            this.setState(()=>({contacts:response.data}))
        })
    }

    render(){
        // console.log(this.state)
        return (
            <div>
            <h2>Listing Contacts - {this.state.contacts.length}</h2>
                <ul>
                    {
                        this.state.contacts.map((contact)=>{
                            return (
                                <li key={contact._id}><Link to={"/contacts/"+contact._id}>{contact.name}</Link></li>
                            )
                        })
                    }
                </ul>
                <Link to="/contacts/new">Add User</Link>
            </div>
        )
    }
}

export default ContactList