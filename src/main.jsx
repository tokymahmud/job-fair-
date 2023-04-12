import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';

import Main from './Components/Layout/Main';
import Ajobs from './Components/Applied-Jobs/ajobs';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import ViewDetail from './Components/View Detail/ViewDetail';


const router = createBrowserRouter([
{
  path: '/',
  element: <Main></Main>,
  children: [
    {
      path:'/',
      element:<Home></Home>,
      loader:()=> fetch('/jobCatagory.json')
      
    },
   {
    path:'statistics',
    element: <Statistics></Statistics>
   },
   {
    path:'job/:id',
    element: <ViewDetail></ViewDetail>,
    loader: ()=> fetch(`/job.json`)
   },
   {
    path:'ajobs',
    element: <Ajobs></Ajobs>
   },
   {
    path:'blog',
    element: <Blog></Blog>
   }
  ]

}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
