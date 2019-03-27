import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class NoteList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            notes:[]
        }
    }

    componentDidMount(){
        axios.get("/notes")
        .then((response)=>{
            this.setState(()=>({notes:response.data}))
        })
    }

    render(){
        console.log(this.state)
        return (
            <div>
            <h2>Listing notes - {this.state.notes.length}</h2>
                <ul>
                    {
                        this.state.notes.map((note)=>{
                            return (
                                <li key={note._id}>{note.title}-{note.body}</li>
                            )
                        })
                    }
                </ul>
                <Link to="/notes/new">Add New note</Link>
            </div>
        )
    }
}

export default NoteList
