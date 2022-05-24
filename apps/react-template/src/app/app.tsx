import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { TryAgain } from './components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="react-template" />
      <TryAgain />
    </StyledApp>
  );
}

export default App;
