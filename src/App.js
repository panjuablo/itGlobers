import Carrusel from './carrusel';
import Navbar from './navBar';
import Rain from './rain';
import Puff from './puff';
import Cart from './cart';
import Nap from './nap';
import Call from './callAction';
import Footer from './footer';
import './App.css';


function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Carrusel/>
      <Rain/>
      <Puff/>
      <Cart/>
      <Nap/>
      <Call/>
      <Footer/>
    </div>
  );
}

export default App;
