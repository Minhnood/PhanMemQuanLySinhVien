import { BrowserRouter,Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavHead from './components/NavHead';
import Listpage from './components/Listpage';
import StudentInfo from './components/StudentInfo';

function App() {
  return (
    <BrowserRouter >
      <NavHead />
      <Routes>
        <Route path="/" element={<Listpage />} />
        <Route path="/student/:id" element={<StudentInfo />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
