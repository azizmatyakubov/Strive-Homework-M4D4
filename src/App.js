import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./components/Main";
import WarningSign from "./components/WarningSign";

function App() {
  return (
    <div>
      <WarningSign message="welcome to the book store" />
      <Main />
    </div>
  );
}

export default App;
