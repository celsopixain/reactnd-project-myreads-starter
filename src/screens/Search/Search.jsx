import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { search, update, getAll } from '../../utils/BooksAPI'
import Book from '../../components/Book/Book'

export default class Search extends Component {
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

	fetchBooks() {
		getAll().then((data) => {
			console.log('all books loaded')
			this.setState({ allBooks: data })
		})
	}

	setSearchState(books, curReq){
		if (curReq < this.state.maxReq){
			console.log('Resposta inválida!')
			return;
		}
		this.setState({books: books, maxReq: curReq})
	}

	doSearch(term){
		let curReq = this.state.reqCount + 1
		this.setState({reqCount: curReq})
	
		if (!term){
			this.setSearchState([], curReq)
			return;
		}
		search(term).then((books) => {
			console.log('Pesquisa realizada')  
			this.setSearchState(books, curReq)
		}).catch (() => {
			console.log('Pesquisa falhou')
			this.setSearchState([], curReq)
		})
	}

	inputChange(evt){
		const term = evt.target.value.trim()
		this.doSearch(term)
		console.log('term ' + term)
	}

	updateHandler(book, shelf) {
		this.updateBook(book, shelf)
		update(book, shelf).then(() => console.log('Livro atualizado com sucesso!'))
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
			books[book.id] = JSON.parse(JSON.stringify(book)) 
			books[book.id].shelf = shelf
		}
		this.setState({ allBooks: books })
	}

	getBook(searchBook){
		let books = this.state.allBooks;
		let achou = false
		for (let key in books){
			if (books[key].id === searchBook.id){
				console.log('Recebe a lista de livros')
				achou = true
				return books[key]
			}
		}
		if (achou === true)
			return searchBook
	}

	render() {
		let books = this.state.books.map((book) => (
			<Book key=	{book.id} 
						{...this.getBook(book)} 
						handler={this.updateHandler.bind(this)} 
			/>
		))
		console.log('this books ' + this.books)

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to='/'>Close</Link>
					<div className="search-books-input-wrapper">
						<input onChange={this.inputChange.bind(this)} type="text" 
							placeholder="Pesquisar por título ou autor" />
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
