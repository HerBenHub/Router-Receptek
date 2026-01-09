import { BrowserRouter } from 'react-router-dom'  
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './layout/Main';
import Navbar from './layout/Navbar';
import Header from './layout/Header';
import Footer from './layout/Footer';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </BrowserRouter>
  )
}

export default App
