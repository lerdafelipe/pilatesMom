//Styles
import './App.css';
//Router
import { BrowserRouter, Routes, Route} from 'react-router-dom';
//Home view
import Home from './views/Home/Home';
//Plans view
import Plans from './views/Plans/Plans';
//Reservation view
import Turns from './views/Turns/Turns';
//Administration view
import Admin from './views/Admin/Admin';
//Header
import Header from './components/Header/Header';
//Footer
import Footer from './components/footer/footer';
//Context
import { TurnProvider } from './context/TurnContext';

function App() {
  return (
    <> 
        <TurnProvider>

          <BrowserRouter>

            <Header/>


            <Routes>
                <Route path="/" exact
                        element={<Home/>}/>
                <Route  path="/plans" 
                        element={<Plans/>}/>
                <Route  path="/turns" 
                        element={<Turns/>}/>
                <Route  path="/admin" 
                        element={<Admin/>}/>
            </Routes>

            <Footer/>

          </BrowserRouter>

        </TurnProvider>
      </>
  );
}

export default App;
