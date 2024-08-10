import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx';
import './index.css'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'home',
          element:<Home/>
        },
        {
          path:'vision',
          element:<Vision/>
        },
        {
          path:'profile',
          element:<Profile/>
        },{
          path:'products',
          element:<Products/>
        },
        {
          path:'contact',
          element:<Contact/>
        }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
