import React from 'react'

class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            title:'',
            body:''
        }
    }

    handleChange = (e)=>{
        const target = e.target
        this.setState(()=>({
            [target.title]:target.value
        }))
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const formData = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.handleSubmit(formData)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Title: <input type="text" value={this.state.title} title="title" onChange={this.handleChange}/></label>
                    <label>Body: <input type="text" value={this.state.body} title="body" onChange={this.handleChange}/></label>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default Form