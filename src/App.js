import { HashRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavHead from './components/NavHead';
import Listpage from './components/Listpage';

function App() {
  return (
    <HashRouter>
      <NavHead />
      <Routes>
        <Route path="/" element={<Listpage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
