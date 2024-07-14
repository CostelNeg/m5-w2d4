
import "./App.css";
import AlertDismissible from "./components/MyAlert.jsx";
import MyNav from "./components/myNavBar";
import AllTheBooks from "./components/AllTheBooks.jsx";
import {books} from '../src/data/books.js'
import React, {useState} from "react";

function App() {
  
  const [searchTerm, setSearchTerm] =useState('');
  const [selectedBookIds, setSelectedBookIds] =useState([])
//questa funzione verra chiamata ogni volta che si digita nel input
  // ha come paramentro un evento(e) che viene generato dal interazione con l'input
  const handleSearchChange = (e) =>{
    setSearchTerm(e.target.value);
  }

  //adesso gestiamo il click nel app Centrle

  const handleBookClick = (bookAsin) => {
    //aggiorniamo stato , e riceve stato precedente 
    setSelectedBookIds(prevSelected => {
      if(prevSelected.includes(bookAsin)){
        return prevSelected.filter(asin => asin !== bookAsin);
      }else {
        //usiamo lo spred operator e creaiamo un nuovo array
        //con tutti gli elementi gia dentro, + quello nuovo
        return [...prevSelected,bookAsin]
      }

    })
  }
  
  return (
    <>
      <MyNav searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <AlertDismissible />
      <AllTheBooks 
      books={books} 
      searchTerm={searchTerm}
      handleBookClick={handleBookClick}
      selectedBookIds={selectedBookIds}
      handleSearchChange={handleSearchChange}
      />
    </>
  );
}

export default App;
