//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import {Routes,Route} from "react-router-dom";
import Footer from './components/footet';
 import Navbar from './components/navbar';
 import Section from './components/section';

function App() {
  return (
  <>
  
   <Header />
   <Navbar />
  
   <Routes>
     <Route path='/' element={<Cards />} />
     <Route path='/cart/:id' element={<CardsDetails />} />
   </Routes>
     
  
   <Section />
   <br/>  <br/>  <br/>  <br/> 
   <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/> 
   <Footer />
  </>
  );
}

export default App;