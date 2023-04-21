import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import MainPage from './pages/MainPage/MainPage';
import ProductView from './pages/ProductPage/ProductView';
import UserSection from './components/UserSection/UserSection';
import './App.css';
import ProductEditView from './pages/ProductEditPage/ProductEditView';
import getConfiguration from './redux/actions/configActions';
import { getProduct } from './redux/actions/productActions';

const App = () => {
  const dispatch = useDispatch();
  const productId = process.env.REACT_APP_PRODUCT_ID;

  useEffect(() => {
    dispatch(getProduct(productId));
    dispatch(getConfiguration());
  }, [dispatch]);

  const configStatus = useSelector((state) => state.config.status);
  const config = useSelector((state) => state.config.data);

  // eslint-disable-next-line
  console.log('config data ======>', config);

  if (configStatus === 'loading' || configStatus === 'idle') {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header mainColor={config.mainColor} logo={config.logo} />
        {config.hasUserSection && <UserSection />}
        <Navigation />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<MainPage />} exact />
            <Route path="/product/:productId" element={<ProductView />} exact />
            <Route path="/product/:productId/edit" element={<ProductEditView />} exact />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
