import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppSiderbar from './AppSidebar';
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`;

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <AppHeader />
      <AppSiderbar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}
