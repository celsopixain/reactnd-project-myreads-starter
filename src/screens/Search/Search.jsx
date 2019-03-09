import React, { Component } from 'react'
import { search, update, getAll } from '../../utils/BooksAPI'
import {Link} from 'react-router-dom'
import Book from '../../components/Book/Book'

class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			books: [],
			reqCount: 0,
			maxReq: 0,
			allBooks: []
		}
	}

	componentDidMount() {
		this.fetchBooks()
	}

	setSearchState(books, curReq){
		if (curReq < this.state.maxReq){
			return;
		}
		this.setState({books: books, maxReq: curReq})
	}

	fetchBooks() {
		getAll().then((data) => {
			this.setState({ allBooks: data })
		})
	}

	doSearch(term){
		// attaching IDs to request, to solve async stale data issues
		let curReq = this.state.reqCount + 1
		this.setState({reqCount: curReq})
	
		if (!term){
			this.setSearchState([], curReq)
			return;
		}
		search(term).then((books) => {
			this.setSearchState(books, curReq)
		}).catch (() => {
			this.setSearchState([], curReq)
		})
	}

	inputChange(evt){
		const term = evt.target.value.trim()
		this.doSearch(term)
	}

	updateHandler(book, shelf) {
		this.updateBook(book, shelf)
	}

	updateBook(book, shelf) {
		let books = this.state.allBooks
		let found = false
		books.forEach((oldBook, ind) => {
			if (oldBook.id === book.id) {
				books[ind].shelf = shelf
				found = true
			}
		})
		if (!found){
			// add new book
			books[book.id] = JSON.parse(JSON.stringify(book)) // clone
			books[book.id].shelf = shelf
		}
		this.setState({ allBooks: books })
	}

	// gets book from allBooks collection
	getBook(searchBook){
		let books = this.state.allBooks;
		for (let key in books){
			if (books[key].id === searchBook.id){
				return books[key]
			}
		}
		return searchBook
	}

	render() {
		let books = this.state.books.map((book) => (
			<Book key={book.id} {...this.getBook(book)} handler={this.updateHandler.bind(this)} />
		))
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to='/'>Close</Link>
					<div className="search-books-input-wrapper">
						<input onChange={this.inputChange.bind(this)} type="text" 
							placeholder="Search by title or author" />
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{books}
					</ol>
				</div>
			</div>
		)
	}
}

export default Search