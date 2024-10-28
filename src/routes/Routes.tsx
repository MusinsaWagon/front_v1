import { Routes as ReactRouters, Route, Outlet } from 'react-router-dom';

import Header from '../components/common/header';
import TabBar from '../components/common/tabBar';

//pages
import MainPage from '../pages/mainPage';
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
