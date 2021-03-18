
import React, { Component } from 'react'
import BookCard from './BookCard'
import books from './data/data'
import FormComponent from './FormComponent'
//here we import the book data


class BookContainer extends React.Component {

    state = {
        books: [...books]
        totalRead: 0 
    }
    //here we set books array 
    //to a new array using the spread operator(we copy that array)
    //we set the initial totalRead to 0 

    renderBooks = () = {
        return this.props.books.map{book => <BookCard
            key={book.isbn}
            title={book.title}
            author={book.author}
            img={book.image}
            addToTotalRead={this.addToTotal}
        />}
    }
    //we use .map to map over that dara
    //create a new array, and PASS all that information to BookCard
    //we set a key, for react can distinguish each book
    //we set title, author, and img. and PASS it to BookCard
    //we Also pass in a function called 'addTotal' 
    //BUT we can name it anything, in our case "addToTotalRead"

    handleAddBook = (book) => {
        this.setState({books: [...this.state.books, book]})
    }
    //now that we recieved a state from our FormContainer
    //we can update our book array 
    //we set the books state by get the current book state and add the book
    



    addToTotal = () => {
        this.setState({...this.state, totalRead: this.state.totalRead + 1})
    }
    //here we again, set the current state by..
    //we use the ...this.state, to include the current one 
    //and update the totalRead: to this.state.totalRead PLUS 1 
    
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>BookContainer</h1>
                <h4>Total Read: {this.state.totalRead}</h4>
                <FormComponent handleAddBook={this.handleAddBook}/>
                {this.renderBooks()}
            </div>
        )
    }
}
//here in our book container we use the this.state.totalRead to
//display the curent amount of totalRead
//we also call on our own function called 'renderBooks()' to display the books.


//we add in our FormComponent

//we pass in our handleAddBook to our formComponent.

