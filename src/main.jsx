import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Layout/Main';
import Home from './component/Home/Home';
import Statistics from './component/Statistics/Statistics';
import AppliedJobs from './component/Applied Jobs/AppliedJobs';
import Blog from './component/Blog/Blog';
import JobDetails from './component/JobDetails/JobDetails';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: ()=> fetch('/categorys.json'),
      },
      {
        path: '/feature/:id',
        element: <JobDetails/>,
        loader: ({params})=> fetch('/featured.json')
      },
      {
        path: 'statistics',
        element: <Statistics/>,
      },
      {
        path: 'appliedJobs',
        element: <AppliedJobs/>,
      }, 
      {
        path: 'blog',
        element: <Blog/>,
      }
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
