import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            mobile: ""
        }
    }

    handleChange = (e) => {
        const target = e.target
        this.setState(() => ({
            [target.name]: target.value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile
        }
        this.props.handleSubmit(formData)
    }

    componentWillReceiveProps(nextProps) {
        /**
         * Not called in first execution
         * Constructor and component did mount called only on first execution
         * Render and componentWillReceiveProps will be called for every re-render
         * nextProps will change everytime a new props are received but
         * this.props is changed to nextProps after completion of this function, 
         * so every time this.props will hold previously passed props value and next props will hold currently passed props value
         * we check for changes in the value's, if values are changed we set the state
         * if we set values without checking it will increase load nothing else, setState will re-render
         */
        console.log(this.props, "orignal props")
        console.log(nextProps)
        if (nextProps.name !== this.props.name) {
            this.setState(() => ({
                name: nextProps.name,
                email: nextProps.email,
                mobile: nextProps.mobile
            }))
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: <input type="text" value={this.state.name} name="name" onChange={this.handleChange} /></label>
                    <label>Email: <input type="text" value={this.state.email} name="email" onChange={this.handleChange} /></label>
                    <label>Mobile: <input type="text" value={this.state.mobile} name="mobile" onChange={this.handleChange} /></label>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default Form