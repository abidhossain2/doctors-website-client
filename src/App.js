import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Header/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
