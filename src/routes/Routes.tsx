import { Routes as ReactRouters, Route, Outlet } from 'react-router-dom';

import Header from '../components/common/NavBar';
import TabBar from '../components/common/Footer';

//pages
import MainPage from '../pages/Main';
import EnrollProd from '../pages/enrollProd/EnrollProd';
import ProductDetail from '../pages/product/ProductDetail';
import SignUp from '../pages/signUp/SignUp';
const Routes = () => {
  return (
    <ReactRouters>
      <Route path="/" element={<Layout />}>
        <Route path="/main" element={<MainPage />} />
        <Route path="enroll" element={<EnrollProd type="product" />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </ReactRouters>
  );
};

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <TabBar />
    </>
  );
};

export default Routes;
