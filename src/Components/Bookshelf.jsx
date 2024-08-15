import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBook((lastNewBks) => ({...lastNewBks, [name]: value,}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks((lastNewBks) => [...lastNewBks, newBook]);
        setNewBook({title: '', author: ''});
    }
    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                {/* Form will go here */}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title </label>
                        <input type='text' name='title' value={newBook.title} onChange={handleInputChange} />

                    </div>
                    <div>
                        <label>Author </label>
                        <input type='text' name='author' value={newBook.author} onChange={handleInputChange} />
                    </div>
                    <button>Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">{/* Book cards will display here */}
                {books.map((b, i) => (
                    <div key={i} className='bookCard'>
                        <h3>{b.title}</h3>
                        <p>By {b.author}</p>
                    </div>
                ))}
            </div>
        </div>
    )
    
}

export default Bookshelf;