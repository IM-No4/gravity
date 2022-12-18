// import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Register from './Register';




function App() 
{
  return (
    <div>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Register />} />
      </Routes>
      </BrowserRouter> */}
    
     <Header />
     <Main />
     <Footer />
     <Register />
     {/* <axios />
     <useState />
      */}
    </div>
    
  );
}

export default App;



