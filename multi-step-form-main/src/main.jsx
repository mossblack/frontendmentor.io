import React from 'react';
import { createRoot } from 'react-dom/client';
import './stylings/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import InfoPage from './components/pages/info';
import PlanPage from './components/pages/plan';
import AddOnsPage from './components/pages/addons';
import SummaryPage from './components/pages/summary';

const router = createBrowserRouter([
    {
        path: '/',
        element: <a href="/info" className='hover:brightness-75'>Click Me</a>
    },
    {
        path: '/info',
        element: <InfoPage />
    },
    {
        path: '/plan',
        element: <PlanPage />
    },
    {
        path: '/addons',
        element: <AddOnsPage />
    },
    {
        path: '/summary',
        element: <SummaryPage />
    }
]);

const root = createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);