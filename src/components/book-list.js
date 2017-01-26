import React, { Component } from 'react';

// We are going to promoteone of the coponents to a container. 
// Container is a react coponent that has direct connection to the state managed by redux.
// The only time we can ever get this bridge available, where we can take a react component and inject state into it, is 
// a component called a container.
// Container is sometimes called "smart component"
// We put containers in its own directoy. 
export default class BookList extends Component {
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