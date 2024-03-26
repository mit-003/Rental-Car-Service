import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Layout from './components/Layout';
import Register from './components/Register';
import Faq from './components/Faq';
import Maruthi from './components/Maruthi';
import Honda from './components/Honda';
import Hyundai from './components/Hyundai';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />} >
        
        <Route path="/Faq" element ={<Faq />} />
        <Route path="/Register" element ={<Register />} />
        <Route path="/Maruthi" element ={<Maruthi />} />
        <Route path="/Honda" element ={<Honda />} />
        <Route path="/Hyundai" element ={<Hyundai />} />
     

        
        </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
