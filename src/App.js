import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BookList from "./components/BookList";
import WarningSign from "./components/WarningSign";
import data from "./data/sciFi.json";

function App() {
  return (
    <div>
      <WarningSign message="welcome to the book store" />
      <BookList data={data} />
    </div>
  );
}

export default App;
