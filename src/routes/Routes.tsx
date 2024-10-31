import { Routes as ReactRouters, Route, Outlet } from 'react-router-dom';

import Header from '../components/common/NavBar';
import TabBar from '../components/common/TabBar';

//pages
import MainPage from '../pages/MainPage';
const Routes = () => {
  return (
    <ReactRouters>
      <Route path="/" element={<Layout />}>
        <Route path="/main" element={<MainPage />} />
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
