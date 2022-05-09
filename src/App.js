
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';

import Header from './Pages/Header/Header';
import Blog from './Pages/Home/Blog/Blog';
import Home from './Pages/Home/Home/Home';


import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Inventory from './Pages/Protected/Inventory/Inventory';
import RequireAuth from './Pages/Protected/RequireAuth/RequireAuth';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        
        <Route path='/inventory/:id' element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
