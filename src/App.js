import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home_page/Home';
import Navbar from './components/Navbar/Navbar';
import PrivateOutlet from './components/private_outlet/PrivateOutlet';
import Shipping from './components/shipping_page/Shipping';
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

        <Route path='/*' element={<PrivateOutlet />}>
          <Route path='shipping' element={<Shipping />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
