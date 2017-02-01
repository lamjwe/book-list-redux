import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
         if (!this.props.book) {
            return (
                <div>Select a book to get started.</div>
            );
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div> 
        );
    }
}

// links redux to the container. 
function mapStateToProps(state) {
    return {
        book: state.activeBook // from the active book reducer which is responsible for creating the active book piece of state in root reducer.
    };
}

export default connect(mapStateToProps)(BookDetail); 