
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Navbar from './component/navbar/navbar';
import React from 'react';
import NoRoute from './pages/noRoute/noRoute';
import Product from './pages/Products/product';
import FeatureProduct from './pages/Products/feature/featureProduct';
import NewProduct from './pages/Products/newProduct/newProduct';
import User from './pages/Users/user';
import DetailsUser from './pages/DetailsUser/detailsUser';
import Login from './pages/Login/Login';
import { AuthProvider } from './component/Auth/Auth';
import Profile from './pages/Profile/Profile';
import { RequireAuth } from './component/RequireAuth/RequireAuth';

const LazyAbout =React.lazy(()=>import ('./pages/About/about'))
function App() {
  return (<AuthProvider>
    <Navbar />
    <Routes>
      <Route path="" element={<Home />}></Route>
      <Route path="about" element={<React.Suspense fallback='Loading ...'>
<LazyAbout></LazyAbout>
      </React.Suspense>}></Route>
      <Route path="products" element={<Product />}>
        <Route path="feature" element={<FeatureProduct />} />
        <Route index path="new" element={<NewProduct />}></Route>
      </Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>}></Route>
      <Route path="user/:id" element={<DetailsUser />}></Route>
      <Route path="user" element={<User />}></Route>
      <Route path="*" element={<NoRoute />}></Route>
    </Routes>
  </AuthProvider>
  );
}

export default App;
