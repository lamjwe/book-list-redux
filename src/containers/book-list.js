import React, { Component } from 'react';
import { connect } from 'react-redux';

// We are going to promoteone of the coponents to a container. 
// Container is a react coponent that has direct connection to the state managed by redux.
// In other words, a container is just a component that has direct access to the state that's produced by redux.

// React and Redux are two seperate libraies, and it is only through a third library, react redux, then we can meld the 
// two together and get a component that's actually aware of the state that is contained within redux. 

// Container is sometimes called "smart component"
// We put containers in its own directoy. 

// Which component do we want to return into a container?
// It varies. In general, we want the most parent component that cares about a particular piece of 
// state to be a container.
// In our app, the app component doesn't really care about the list of books or the current selected book. Only the book list component does.
// The only thing that the app component is here for is say render a book list to the page and render book detail to the page. 
// Therefore, book list and book detail should both be containers.

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            )
        });
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }    
}

// links redux to the container. 
function mapStateToProps(state) {
    // Takes in the application state, and whatever is returned will show up as props inside of BookList
    return {
        books: state.books
    }
}

// deleted the export default from above whenever we make a cotainer file. 
// Don't want to export the book list plain component, we want to export the container. 
export default connect(mapStateToProps)(BookList);

// connect function takes a function and a component and produces a container. 
// The container is a component that is aware of the state that's contained by redux. 
// The mapStateToProps function is especially key here. The first argument is the state and it 
// returns an object. Whatever the object is returned, will be available to our component as this.props.

// 2 Key points: 
//  1. Whenever the application state changes, the component, our container booklist, will automatically rerender. 
//  2. By using 'connect' to create a container, whenever the application state changes, the object in the 
//      state function will be assigned as props to the component. 