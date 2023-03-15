import './App.css';
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Catalog from "./Components/Catalog";
function App() {
  return (
    <div className="App">
        <Navbar />
        <Banner />
        <Catalog />
    </div>
  );
}

export default App;
