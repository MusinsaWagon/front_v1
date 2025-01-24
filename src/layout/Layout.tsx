import Header from '../components/common/NavBar';
import TabBar from '../components/common/Footer';
import { MainContainer } from '../styles/mainContainer';
import PullToRefresh from 'react-simple-pull-to-refresh';
import RefreshingContent from './Refreshing';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  const handleRefresh = () => {
    return new Promise<void>(() => {
      setTimeout(() => {
        window.location.reload();
      }, 500);
    });
  };

  return (
    <>
      <Header />
      <MainContainer>
        <PullToRefresh
          onRefresh={handleRefresh}
          canFetchMore={true}
          pullingContent={<RefreshingContent />}
        >
          <Outlet />
        </PullToRefresh>
      </MainContainer>
      <TabBar />
    </>
  );
}
