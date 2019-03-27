import React from 'react'
import Form from './Form'
import axios from 'axios';

class ContactEdit extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            contact:{}
        }
    }

    componentDidMount(){
        setTimeout(() => {
            axios.get(`/contacts/${this.props.match.params.id}`)
            .then((response)=>{
                this.setState(()=>({contact: response.data, isLoaded:true}))
            })}, 1)
            // setTimeout(() => {this.setState(()=>({contact:{}}))}, 7000)
    }
    
    handleSubmit = (formData)=>{
        axios.put(`/contacts/${this.state.contact._id}`, formData)
        .then((response)=>{
            this.props.history.push(`/contacts/${this.state.contact._id}`)
        })
    }

    render(){
        // console.log(this.state.contact)
        return (
            <div>
             <h2>Edit contact</h2>
            <Form 
                name={this.state.contact.name}
                email={this.state.contact.email}
                mobile={this.state.contact.mobile}
                handleSubmit={this.handleSubmit}
            />
               
            </div>
        )
    }
}

export default ContactEdit