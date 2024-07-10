import React, { useState } from "react";
import { Row } from "react-bootstrap";
import SingleBook from "./SingleBook.jsx";


const AllTheBooks = ({ books }) => {
  // utilizzo l'hook per creare uno stato locale del componente con la variabile che contiene
  // lo stato e la funziuone di update
  const [searchTerm, setSearchTerm] = useState("");
  //se passiamo èiu di un componente trasformiamo lo state in array
  const [selectedBookIds, setSelectedBookIds] =useState([])

  //questa funzione verra chiamata ogni volta che si digita nel input
  // ha come paramentro un evento(e) che viene generato dal interazione con l'input
  const handleSearchChange = (e) => {
    //e.t.value contine eil valore del input  (tasto premuto dall'utente)
    setSearchTerm(e.target.value);
  };

  //gestiamo il click sulla card 

  const handleBookClick = (bookAsin) => {
    //se selezionato, lo diselezioniam, altrimenti ne selezioniamo un altro

    setSelectedBookIds(prevSelected =>
      {
      //se e gia selezionato, lo rimoviamo
      if(prevSelected.includes(bookAsin)) {
        return prevSelected.filter(asin => asin !== bookAsin)
      }
      else {
        return[...prevSelected,bookAsin]
      }
    })
  }

  //filtriamo i libiri in base alla ricerca senza che sia caseSensitive

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(books);

  return (
    <>
      <div className=" d-flex justify-content-center">
        <input
          type="text"
          placeholder="Cerca il tuo libro"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        
      </div>
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
