
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './Component/AddUser';
import UserDetails from './Component/UserDetails';
import UpdateUser from './Component/UpdateUser';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Form from './Component/Form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>
          <Routes>
            <Route path='/adduser' element={<AddUser/>}></Route>
            <Route path='/' element={<UserDetails/>}></Route>
            <Route path='/update/:id' element={<UpdateUser/>}></Route>
            <Route path='/form' element={<Form/>}></Route>
            
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
