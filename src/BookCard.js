import React, { Component } from 'react'

export default class BookCard extends Component {

    state = {
        read: 0
    }

    handleClick = () => {
        this.setState({...this.state, read: this.state.read + 1})
        this.props.addToTotalRead()
    }
    //2. this handle click then gets that event, 
    //spread operator get to make a NEW ARRAY, BUT update the read: inside
    //that object (current state), to this.state +1, is what it will be now
    //two things happen when this handleClick is triggered, 
    //update individual read and total read for all books
    

    render() {
        return (
            <div>
                <h2>Title: {title.props.title}</h2>
                <h2>Author: {author.props.title}</h2>
                <img
                src={this.props.img} 
                style={{wdith:"100px"}} 
                alt={this.props.title}
                ></img>
                <button onClick={this.handleClick} read {this.state.read}></button>
            </div>
        )
    }
}
//the code inside the state will show the initial state which is 1
//we can add console.log("clicked") to make sure our onClick worked
//then we pass in a function that is going to change our read: state 

//1. button with onClick event listener, triggers handleClick, 
//and displays the current read state