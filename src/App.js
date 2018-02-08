import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import ScrollContent from './ScrollContent';
import './App.css';

class App extends Component {
    state = {
        robots: [],
        searchField: ''
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render () {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        let content = (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <ScrollContent>
                    <CardList robots={filteredRobots} />
                </ScrollContent>
            </div>
        )

        this.state.robots === 0 ? content = <h1>Loading</h1> : null;

        return content;
    }
}

export default App;