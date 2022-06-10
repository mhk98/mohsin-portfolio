import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Home/Contact';
import Home from './Pages/Home/Home';
import Skills from './Pages/Home/Skills';
import Project1 from './Pages/Projects/Project1';
import Project2 from './Pages/Projects/Project2';
import Project3 from './Pages/Projects/Project3';
import Projects from './Pages/Projects/Projects';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="App bg-neutral mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/skills' element={<Skills></Skills>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/project1' element={<Project1></Project1>}></Route>
        <Route path='/project2' element={<Project2></Project2>}></Route>
        <Route path='/project3' element={<Project3></Project3>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
