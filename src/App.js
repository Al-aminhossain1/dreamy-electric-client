
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='px-10' >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='/' element={}></Route>
  <Route path='/' element={}></Route>
  <Route path='/' element={}></Route>
  <Route path='/' element={}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
