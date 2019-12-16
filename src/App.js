import React, { Component } from 'react';
import './App.css';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer'

configure({ adapter: new Adapter() });

class App extends Component {
    constructor() {
        super();

        this.state = {
            players: []
        }
    }

    onScoreUpdate = (playerIndex, scoreChange) => {
        this.setState({
            players: this.state.players.map((player, index) => {
                if (index === playerIndex) {
                    return { ...player, score: player.score + scoreChange };
                }
                return player;
            })
        })
    };

    onPlayerAdd = (playerName) => {
        const newPlayer = {
            name: playerName,
            score: 0,
        };
        this.setState({
            players: [...this.state.players, newPlayer]
        })
    };

    onPlayerRemove = index => {
        const newPlayerList = this.state.players.filter(
            (player, playerIndex) => playerIndex !== index
        );
        this.setState({ players: newPlayerList });
    };

    render() {
        return (
            <div className="App">
                <AddPlayer
                    onPlayerAdd={this.onPlayerAdd}
                />
                <PlayersList
                    players={this.state.players}
                    onScoreUpdate={this.onScoreUpdate}
                    onPlayerRemove={this.onPlayerRemove}
                />
            </div>
        );
    }
}

export default App;