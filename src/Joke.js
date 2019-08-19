import React, { Component } from 'react';
import './Joke.css';

export default class Joke extends Component {

    getColor() {
        let voteNumbers = this.props.votes;
        if(voteNumbers >= 15) {
            return "#4CAF50";
        } else if (voteNumbers >= 12) {
            return "#8BC34A";
        } else if (voteNumbers >= 9) {
            return "#CDDC39";
        } else if (voteNumbers >= 6) {
            return "#FFEB3B";
        } else if (voteNumbers >= 3) {
            return "#FFC107";
        } else if (voteNumbers >= 0) {
            return "#FF9800";
        } else {
            return "#F44336";
        }
    }

    getEmoji() {
        let voteNumbers = this.props.votes;
        if(voteNumbers >= 15) {
            return "em em-rolling_on_the_floor_laughing";
        } else if (voteNumbers >= 12) {
            return "em em-laughing";
        } else if (voteNumbers >= 9) {
            return "em em-smiley";
        } else if (voteNumbers >= 6) {
            return "em em-slightly_smiling_face";
        } else if (voteNumbers >= 3) {
            return "em em-neutral_face";
        } else if (voteNumbers >= 0) {
            return "em em-confused";
        } else {
            return "em em-angry";
        }
    }

    render() {
        return (
            <div className='Joke'>
                <div className='Joke-buttons'>
                    <i className='fas fa-arrow-up' onClick={this.props.upvote}></i>
                    <span className='Joke-votes' style={{borderColor: this.getColor()}}>{this.props.votes}</span>
                    <i className='fas fa-arrow-down' onClick={this.props.downvote}></i>
                </div>
                <div className='Joke-text'>{this.props.text}</div>
                <div className="Joke-smiley">
                    <i className={this.getEmoji()}></i>
                </div>
            </div>
        );
    }
}