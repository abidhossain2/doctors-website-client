import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import DocAppointment from './Pages/DocAppointment.js/DocAppointment';
import Navbar from './Pages/Header/Navbar';
import Home from './Pages/Home/Home';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<DocAppointment></DocAppointment>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
