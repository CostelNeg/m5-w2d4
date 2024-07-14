
import { Row } from "react-bootstrap";
import SingleBook from "./SingleBook.jsx";


const AllTheBooks = ({ books,searchTerm, handleBookClick,selectedBookIds, handleSearchChange }) => {
  //filtriamo i libiri in base alla ricerca senza che sia caseSensitive

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(books);

  return (
    <>
      <Row className="d-flex justify-content-center">
        {/* utilizzo operatore ternario per mostrare o meno i libri
        trovati */}
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              
              <SingleBook 

              key={book.asin}
              book={book}
              isSelected = {selectedBookIds.includes(book.asin)}
              onClick ={()=>handleBookClick(book.asin)}

              />
            ))
          ) : (
            <p>Nessun libro Trovato</p>
          )
          
          }
        </Row>
        
    </>
    
  );
  
};
export default AllTheBooks;
