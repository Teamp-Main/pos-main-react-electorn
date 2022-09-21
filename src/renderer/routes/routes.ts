import React from 'react';
import Home from 'renderer/view/pages/Home';
import Login from 'renderer/view/pages/Login';
import SettingProduct from 'renderer/view/pages/SettingProduct';
import SettingSideProduct from 'renderer/view/pages/SettingSideProduct';
import SettingTable from 'renderer/view/pages/SettingTable';
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
  {
    path: '/product/setting/table',
    Component: SettingTable,
  },
  {
    path: '/product/setting/product',
    Component: SettingProduct,
  },
  {
    path: '/product/setting/product/side',
    Component: SettingSideProduct,
  },
];

export default ROUTER;
