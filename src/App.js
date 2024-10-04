import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Coverage from './pages/Coverage';
import Price from './pages/Pricing';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/coverage' element={<Coverage />} />
      <Route path='/pricing' element={<Price />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
    </>
  );
}

export default App;
