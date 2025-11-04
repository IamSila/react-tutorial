import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
    render() {
        const characters = [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
            {
                name: "jason statham",
                job: "transporter",
            }
        ]
        
        /* const details = [
            {
                "name": "Sila",
                "age": 30,
                "course": "website development",
            },
            {
                "name": "Sila",
                "age": 30,
                "course": "website development",
            },
            {
                "name": "Sila",
                "age": 30,
                "course": "website development",
            },
            {
                "name": "Sila",
                "age": 30,
                "course": "website development",
            },
        ] */
    return (
        <>
            <div className="container">
                <h1>hello, this is a table component inside app component</h1>
                <Table characterData={ characters } />
            </div>
        </>
    )
  }
}

export default App;
