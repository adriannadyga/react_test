import React from 'react';
import './Player.css';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const Player = (props) => (
    <li className="Player">
        <span className="Player__name">{props.name}</span>
        <span className="Player__score">{props.score}</span>
        <span className="Player__button" onClick={() => props.onPlayerScoreChange(1)} >+</span>
        <span className="Player__button" onClick={() => props.onPlayerScoreChange(-1)} >-</span>
        <span className="Player__button Player__remove" onClick={props.onPlayerRemove}>Remove</span>
    </li>
);

export default Player;