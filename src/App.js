
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Footer from './Pages/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';

import Header from './Pages/Header/Header';
import AboutUs from './Pages/Home/AboutUs/AboutUs';
import Blog from './Pages/Home/Blog/Blog';
import Home from './Pages/Home/Home/Home';


import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import AddNew from './Pages/Protected/AddNew/AddNew';
import Inventory from './Pages/Protected/Inventory/Inventory';
import ManageInventory from './Pages/Protected/ManageInventory/ManageInventory';
import MyAddedItems from './Pages/Protected/MyAddedItems/MyAddedItems';
import MyItems from './Pages/Protected/MyItems/MyItems';
import RequireAuth from './Pages/Protected/RequireAuth/RequireAuth';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:productId' element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}></Route>
        <Route path='/manage' element={<RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>}></Route>
        <Route path='/addnew' element={<RequireAuth>
          <AddNew></AddNew>
        </RequireAuth>}></Route>
        <Route path='/myitem/:id' element={<RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>}></Route>
        <Route path='/myadditem' element={<RequireAuth>
          <MyAddedItems></MyAddedItems>
        </RequireAuth>}></Route>
        <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
