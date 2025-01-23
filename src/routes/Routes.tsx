import { Routes as ReactRouters, Route, Outlet } from 'react-router-dom';

import Header from '../components/common/NavBar';
import TabBar from '../components/common/Footer';
import { MainContainer } from '../styles/mainContainer';
//pages
import MainPage from '../pages/Main';
import EnrollProd from '../pages/enrollProd/EnrollProd';
import ProductDetail from '../pages/product/ProductDetail';
import SignUp from '../pages/signUp/SignUp';
import SignIn from '../pages/signIn/SignIn';
import LoginHandler from '../components/signIn/socialLogin/LodingHandler';
import SearchDetail from '../pages/searchList/SearchDetail';
import MyList from '../pages/MyList/MyList';

const Routes = () => {
  return (
    <ReactRouters>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/entire" element={<MainPage />} />
        <Route path="enroll" element={<EnrollProd type="product" />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="/search/detail" element={<SearchDetail />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<SignIn />} />
        <Route path="heartList" element={<MyList />} />
        <Route path="enrollList" element={<MyList />} />
        <Route
          path="/api/v1/users/auth/login/kakao"
          element={<LoginHandler />}
        />
        <Route
          path="/api/v1/users/auth/login/naver"
          element={<LoginHandler />}
        />
      </Route>
    </ReactRouters>
  );
};

const Layout = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <TabBar />
    </>
  );
};

export default Routes;
