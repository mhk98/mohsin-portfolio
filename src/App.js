import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Home/Contact';
import Home from './Pages/Home/Home';
import Skills from './Pages/Home/Skills';
import Projects from './Pages/Projects';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="App mx-28">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/skills' element={<Skills></Skills>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
