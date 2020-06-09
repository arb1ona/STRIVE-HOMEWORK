import React, { Component } from 'react';
import SingleBook from './SingleBook';
import { Row, FormControl } from 'react-bootstrap';
import './MyStyle.css';

class BookList extends Component {

    state = {
        books: [],
        search: ""
    }

    render() {
        return (
            <>
                <Row>
                    <h1>{this.props.text}</h1>
                    <FormControl
                        placeholder="Search your book"
                        value={this.state.value}
                        onChange={(e) => this.setState({ search: e.currentTarget.value.toLowerCase() })}
                    />
                </Row>
                <Row>

                    {this.state.books
                        .filter(book => book.title.toLowerCase().indexOf(this.state.search) !== -1 || book.category.toLowerCase().indexOf(this.state.search) !== -1)
                        .map(book =>
                            <SingleBook item={book} />)}
                </Row>
            </>
        )
    }

    componentDidMount = async () => {
        const resp = await fetch("http://striveschool.herokuapp.com/books?offset=0&limit=50")
        if (resp.ok) {
            const books = await resp.json()

            this.setState({
                books: books
            })
        }
    }

}

export default BookList;