import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Home from '../pages/Home';

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> }
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter >
  );
};

export default AppWrapper;
