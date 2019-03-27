import React from 'react'
import Form from './Form'
import axios from 'axios';
import { Redirect } from 'react-router-dom'

class New extends React.Component{
    constructor() {
        super() 
        this.state = {
            noteSaved: false 
        }
    }
    handleSubmit = (formData)=>{
        axios.post('/notes', formData)
        .then(()=>{
            // this.props.history.push('/notes')
            this.setState(() => ({
                noteSaved: true 
            }))
        })
        .catch((err)=>{console.log(err)})
    }

    render(){
        if(this.state.noteSaved) {
            return <Redirect to="/notes" />
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