import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

class ContactShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            contact:{}
        }
        this.deleteContact = this.deleteContact.bind(this)
    }

    componentDidMount(){
        axios.get(`/contacts/${this.props.match.params.id}`)
        .then((response)=>{
            this.setState(()=>({contact: response.data}))
        })
    }

    deleteContact(){
        const confirmDelete = window.confirm("Are you sure?")
        if(confirmDelete){
            axios.delete(`/contacts/${this.state.contact._id}`)
            .then(()=>{this.props.history.push('/contacts')})
        }
    }

    render(){
        return (
            <div>
                <h1>Contact info</h1>
                <h2>{this.state.contact.name}</h2>
                <p>Email - {this.state.contact.email}</p>
                <p>Mobile - {this.state.contact.mobile}</p>
                <button><Link to="/contacts">back</Link></button>
                <button onClick={this.deleteContact}>delete</button>
                <button><Link to={"/contacts/edit/"+this.state.contact._id}>edit</Link></button>
            </div>
        )
    }
}

export default ContactShow