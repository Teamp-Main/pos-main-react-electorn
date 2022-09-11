import React from 'react';
import Home from 'renderer/view/pages/Home';
import Login from 'renderer/view/pages/Login';
import SignUp from 'renderer/view/pages/SignUp';

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
    Component: SignUp,
  },
  {
    path: '/',
    Component: Home,
  },
];

export default ROUTER;
