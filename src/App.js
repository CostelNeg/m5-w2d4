
import "./App.css";
import AlertDismissible from "./components/MyAlert.jsx";
import MyNav from "./components/myNavBar";
import AllTheBooks from "./components/AllTheBooks.jsx";
import {books} from '../src/data/books.js'

function App() {
  return (
    <>
      <MyNav />
      <AlertDismissible />
      <AllTheBooks books={books} />
    </>
  );
}

export default App;
