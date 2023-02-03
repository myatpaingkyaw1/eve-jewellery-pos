import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
