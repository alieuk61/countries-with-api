import logo from './logo.svg';
import './App.css';
import MainPage from './components/main-page'
import Header from './components/header'
import Details from './components/details'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/countries-with-api' element={<MainPage />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
