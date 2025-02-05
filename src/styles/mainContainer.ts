import styled from 'styled-components';

export const MainContainer = styled.div<{ $isBrowser: boolean }>`
  padding-top: 96px;
  padding-bottom: ${({ $isBrowser }) => ($isBrowser ? 'initial' : '90px')};
`;
