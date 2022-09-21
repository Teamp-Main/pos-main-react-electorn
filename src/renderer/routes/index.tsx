import { HashRouter as ReactRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import ROUTER from './routes';

const RouterContainer = styled.div`
  width: 80%;
`;

const Router = () => (
  <RouterContainer>
    <ReactRouter>
      <Routes>
        {ROUTER.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </ReactRouter>
  </RouterContainer>
);

export default Router;
