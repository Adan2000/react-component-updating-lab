import React, { Component } from 'react'

export default class FormComponent extends Component {
//what makes this a controlled form is that it is connected to state
//makes sure what is being updated. 

    state = {

    }

    handleChange  = (event) => {
        this.setState({...this.state, [event.target.name]: event.target.value})
    }
    //this handleChange is going to take in a event.
    //if we didnt cope using spread operator we would overwrite the current
    //values and we dont wanna do that, we wanna update them.
    //we set the current state tp the value of the event (which is what is typed in)
    //[event.target.name] we told them to take the name of the field
    //our input has a 'name' attribute, make that the key: 
    //and our event.target.value ....will be the value   key : value 
    //because we used onChange, this will update the state right away as we tyep
    

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleAddBook(this.state)
        event.target.reset()
    }
    //we add a preventDefault to prevent the page from refreshing
    //we need to get the infor from this state to our BookContainer
    //we pass in the current state because our 
    //changeChange is updating the current state

    //when we submit, we do event.target.reset() 
    //so our event.target is the form so we call reset so once
    //we submit it we remove what we previously typed in


    
    render() {
        return (
            <div>
                <h3></h3>
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor='isbn'>ISBN</label>
                    <input onChange={this.handleChange} name='isbn' id='isbn' type='text'/>
                    
                    <label htmlFor='title'>title</label>
                    <input onChange={this.handleChange} name='isbn' id='isbn' type='text'/>
                
                    <label htmlFor='author'>author</label>
                    <input onChange={this.handleChange} name='isbn' id='isbn' type='text'/>

                    <label htmlFor='img'>img</label>
                    <input onChange={this.handleChange} name='isbn' id='isbn' type='text'/>

                    <input name="Submit" type="submit" />

                </form>
            </div>
        )
    }
}
//we add a handleChange event listener that triggers whenever something
//is changed, and we pass it in our function that handlesChange.

//we all give the same name attribute that way we can change them 
//all at the same time in the function that handles change.

//then we add our submit button to the form. 
//we have to add a submit event to OUR FORM