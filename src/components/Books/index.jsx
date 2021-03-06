import React, { Component } from 'react';
import SearchArea from '../SearchArea';
import request from 'superagent';
import BookList from '../BookList';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
            books: [],
            searchField: ''
        }
    }

    searchBooks = (e) => {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchField, {header: {'Access-Control-Allow-Origin': '*'}})
            .query({ q: this.searchField })
            .then((data) => {
                console.log(data);
                this.setState({ books: [...data.body.items] })
                
            });
    }

    handleSearch = (e) => {
        console.log(e.target.value);
        this.setState({ searchField: e.target.value })
    }

    render() {
        return (
            <div>
                <SearchArea searchBooks={this.searchBooks} handleSearch={this.handleSearch} />
                <BookList books={this.state.books} />
            </div>
        );
    }


}

export default Books;