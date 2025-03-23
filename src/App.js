import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavHead from './components/NavHead';
import Listpage from './components/Listpage';
import StudentInfo from './components/StudentInfo';
import LoginUpPage from './components/LoginUpPage';
import LoginPage from './components/LoginPage';
import ChangePass from './components/ChangePass';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return isAuthenticated ? element : <Navigate to="/login" />;
};
function App() {
  return (
    <BrowserRouter>
      <NavHead />
      <Routes>
        <Route path="/" element={<PrivateRoute element={<Listpage />} />} />
        <Route path="/student/:id" element={<PrivateRoute element={<StudentInfo />} />} />
        <Route path="/loginUp" element={<LoginUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/changepass" element={<ChangePass />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

