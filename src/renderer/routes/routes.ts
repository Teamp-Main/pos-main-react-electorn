import React from 'react';
import Home from 'renderer/view/pages/home';
import Login from 'renderer/view/pages/Login';

interface RouterDefine {
  path: string;
  Component: () => JSX.Element;
}

const ROUTER: RouterDefine[] = [
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/sign-up',
    Component: Login,
  },
  {
    path: '/',
    Component: Home,
  },
];

export default ROUTER;
