import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  HashRouter as ReactRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
import SideBar from 'renderer/view/layout/SideBar';
import Login from 'renderer/view/pages/Login';
import SignUp from 'renderer/view/pages/SignUp';
import styled from 'styled-components';
import ROUTER from './routes';

const RouterContainer = styled.div`
  width: 100%;
  display: flex;
`;

const ComponentsWrapper = styled.div`
  width: 100%;
`;

const Router = () => {
  // 사이드바 상태관리
  const isShow = useSelector(state => state.tagEvent.tagShowEvent.isSideBar);

  return (
    <ReactRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login/*" element={<Navigate to="/login" replace />} />
        <Route path="/sign-up" element={<SignUp />} />

        {ROUTER.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <RouterContainer>
                {isShow && <SideBar />}
                <ComponentsWrapper>
                  <Component />
                </ComponentsWrapper>
              </RouterContainer>
            }
          />
        ))}
      </Routes>
    </ReactRouter>
  );
};

export default Router;
