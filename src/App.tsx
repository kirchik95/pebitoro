import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from '@core/components/Header';

import s from './App.module.css';

const ROUTES = [{ element: React.lazy(() => import('@features/Main')), path: '/' }];

function App() {
  return (
    <div className={s.root}>
      <Header />
      <main>
        <Routes>
          {ROUTES.map((route) => {
            const Element = route.element;

            return <Route key={route.path} path={route.path} element={<Element />} />;
          })}
        </Routes>
      </main>
    </div>
  );
}

export default App;
