import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home_page/Home';
import Navbar from './components/Navbar/Navbar';
import Shipment from './components/shipping_page/Shipping';
import SignInPage from './components/Sign_page/SignInPage';
import SignUpPage from './components/Sign_page/SignUpPage';
import SingleProductView from './components/single_product_view/SingleProductView';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/item/:id' element={<SingleProductView />} />
        <Route path='/shipping' element={<Shipment />} />
      </Routes>
    </Router>
  );
}

export default App;
