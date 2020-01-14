import React from 'react';
import Card from '../Card';

const Booklist = (props) => {
	return (
        <div className="list">
            {
                props.books.map((book, i) => {
                    return <Card 
                        key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        description={book.searchInfo.textSnippet}
                        link={book.volumeInfo.previewLink}
                    />
                })
            }
        </div>
	)
}

export default Booklist;