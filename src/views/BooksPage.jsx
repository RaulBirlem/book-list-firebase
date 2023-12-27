import Book from '../components/Book.jsx';
import Header from '../components/Header.jsx';
import {useSelector, useDispatch} from 'react-redux';
import {fetchBooks, selectBooks} from '../store/booksSlice.js';
import { useEffect } from 'react';


function BooksPage() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks).books;
  const pageTitle = "📖 Book List with Router, Redux & Firebase";
  
  const bookStatus = useSelector(selectBooks).status;


  useEffect(()=>{
/* redux store doesn't know anything about async logic */
/* only knows how to synchronously dispatch actions, update the state by
calling the root reducer function and notify the UI that something
has changed ! */
/* because of this use createAsyncThunk(bookSlice.jsx)  */

    if(bookStatus == 'idle'){
    dispatch(fetchBooks());

    }


  },[])


    return (
      <>
        <div className="container">
            <Header pageTitle={pageTitle} />
            <div className="books-container">
                <div className="books-list">
                    
                    {books.map(book => 
                    
                    <Book key={book.id} book={book}  />
                    
                    )}

                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default BooksPage
  