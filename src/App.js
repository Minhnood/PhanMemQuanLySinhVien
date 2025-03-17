import { BrowserRouter,Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavHead from './components/NavHead';
import Listpage from './components/Listpage';

function App() {
  return (
    <BrowserRouter >
      <NavHead />
      <Routes>
        <Route path="/" element={<Listpage />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
