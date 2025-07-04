import styled from 'styled-components';

const StyledAppSidebar = styled.aside`
  grid-row: 1 / -1;
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
`;

export default function AppSiderbar() {
  return <StyledAppSidebar>Sidebar</StyledAppSidebar>;
}
