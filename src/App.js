import "./App.css";
import AlertDismissible from "./components/MyAlert.jsx";
import MyNav from "./components/myNavBar";
import AllTheBooks from "./components/AllTheBooks.jsx";
import {books} from '../src/data/books.js'
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import BookReviews from "./components/BookReviews.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBookIds, setSelectedBookIds] = useState(null);


  //questa funzione verra chiamata ogni volta che si digita nel input
  // ha come paramentro un evento(e) che viene generato dal interazione con l'input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  //adesso gestiamo il click nel app Centrle

  const handleBookSelect = (bookAsin) => {
    setSelectedBookIds(bookAsin);
  };

  return (
    <>
      <MyNav searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <AlertDismissible />
      <Row>
        <Col lg={8} xs={8}>
          <AllTheBooks
            searchTerm={searchTerm}
            books={books}
            onBookSelect={handleBookSelect}
            selectedBookIds={selectedBookIds}
          />
        </Col>
        <Col lg={3} xs={3}>
          <BookReviews 
          bookAsin={selectedBookIds}/>
        </Col>
      </Row>
    </>
  );
}

export default App;
