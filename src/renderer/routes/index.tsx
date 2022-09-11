import { HashRouter as ReactRouter, Routes, Route } from 'react-router-dom';
import ROUTER from './routes';

const Router = () => (
  <ReactRouter>
    <Routes>
      {ROUTER.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  </ReactRouter>
);

export default Router;
