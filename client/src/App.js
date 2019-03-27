import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import ContactList from './components/contacts/List'
import ContactHome from './components/layout/Home'
import ContactNew from './components/contacts/New'
import ContactShow from './components/contacts/Show'
import ContactEdit from './components/contacts/Edit'

import NoteList from './components/notes/List'
import NoteNew from './components/notes/New'

class App extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <h2>Welcome to contact manager</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                        <li><Link to="/notes">Notes</Link></li>
                    </ul>

                    <Switch>
                        <Route path="/" exact={true} component={ContactHome} />
                        <Route path="/contacts" exact={true} component={ContactList} />
                        <Route path="/contacts/new" exact={true} component={ContactNew} />
                        <Route path="/contacts/:id" exact={true} component={ContactShow} />
                        <Route path="/contacts/edit/:id" component={ContactEdit} />

                        <Route path="/notes" exact={true} component={NoteList} />
                        <Route path="/notes/new" exact={true} component={NoteNew} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App