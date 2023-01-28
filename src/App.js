import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';


function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<SharedLayout />}>
             <Route index element={<Home />} />
             <Route path='about' element={<About />} />
             <Route path='portfolio' element={<Portfolio />} />
             <Route path='Contact' element={<Contact />} />
          </Route>
       </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
