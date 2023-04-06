import './App.css';
import Home from './Home';
import Aruk from './Aruk';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Megrendeles from './Megrendeles';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aruk" element={<Aruk />}></Route>
        <Route path="/megrendeles/:id" element={<Megrendeles />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
