import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ScrollContent from '../components/ScrollContent';
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

        if (this.state.robots === 0) content = <h1>Loading</h1>

        return content;
    }
}

export default App;