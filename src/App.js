import Home from "./pages/home/Home";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Register from "./pages/Register/Register";
import AllTransaction from "./pages/AllTransaction/AllTransaction";
import AllCustomers from "./pages/AllCustomers/AllCustomers";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/transaction" element={<AllTransaction/>}/>
      <Route path="/customer" element={<AllCustomers/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
