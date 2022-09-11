import { HashRouter as ReactRouter, Routes, Route } from 'react-router-dom';
import Home from 'renderer/view/pages/home';

const Router = () => (
<ReactRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>
</ReactRouter>
);

export default Router;
