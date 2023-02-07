import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Shop from "./Shop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
