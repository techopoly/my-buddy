import { React, Component } from 'react';
import { Cardlist } from './Cardlist';
import { CardArray } from './Cardlist'
import SearchBox from './SearchBox';
import robots from './robots';
import './App.css';
import './index.css';
import Scroll from './Scroll'


class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: robots,
            filteredRobots: []
        }

        console.log('constructor')
    }

    allRobots = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => { return response.json() })
            .then(users => {
                console.log(users);
                return users
            });
    }

    updateFilteredRobots = (input) => {

        let value = input.target.value
        this.setState({
            filteredRobots: robots.filter((robot) => {
                return robot.name.toLowerCase().includes(value.toLowerCase())
            })
        });

        console.log(input);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => { return response.json() })
            .then(users => {
                this.setState({ filteredRobots: users });
                //console.log(users);
                console.log('componentDidMount')
            });
        //console.log(this.allRobots())
    }

    render() {
        console.log('render')
        return (
            <div id='root-div'>
                <h1 id='main-header'>My-Buddy</h1>
                <SearchBox searchChange={this.updateFilteredRobots} />
                <Scroll>
                    <CardArray robots={this.state.filteredRobots} />
                </Scroll>
                <CardArray robots={this.state.filteredRobots} />

            </div>

        )
    }
}

export default App;


/* robots.filter((robot)=>{
                return robot.name.toLowerCase().includes(value.toLowerCase()) */


/* filteredRobots : this.allRobots()
.then((users)=>{
users.filter((robot)=>{
    return robot.name.toLowerCase().includes(value.toLowerCase())
 })
}

) */




/*

if (this.state.filteredRobots.length === 0) {
            return (
                <div id='root-div'>
                    <h1>Didn't match any item</h1>
                    <h1 id='main-header'>My-Buddy</h1>
                    <SearchBox searchChange={this.updateFilteredRobots} />
                    <CardArray robots={this.state.filteredRobots} />
                </div>

            )
        }

        else {
            return (
                <div id='root-div' >
                    <h1 id='main-header'>My-Buddy</h1>

                    <SearchBox searchChange={this.updateFilteredRobots} />
                    <CardArray robots={this.state.filteredRobots} />
                </div>
            )
        }

*/