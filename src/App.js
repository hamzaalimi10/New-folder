import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/movies" element={<Movies/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;