import React from 'react'
import Form from './Form'
import axios from 'axios';
import { Redirect } from 'react-router-dom'

class New extends React.Component{
    constructor() {
        super() 
        this.state = {
            contactSaved: false 
        }
    }
    handleSubmit = (formData)=>{
        axios.post('/contacts', formData)
        .then(()=>{
            // this.props.history.push('/contacts')
            this.setState(() => ({
                contactSaved: true 
            }))
        })
        .catch((err)=>{console.log(err)})
    }

    render(){
        if(this.state.contactSaved) {
            return <Redirect to="/contacts" />
        }
        return(
            <div>
                <Form
                 handleSubmit={this.handleSubmit} 
                 />
            </div>
        )
    }
}

export default New