import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';


import NavHead from './components/NavHead';
import Listpage from './components/Listpage';


function App() {

 


  return (
    <BrowserRouter>
      <NavHead></NavHead>
      <Routes>
       <Route path="/PhanMemQuanLySinhVien/" element={<Listpage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
