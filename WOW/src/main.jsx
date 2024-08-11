import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import './index.css'
import SearchPage from './Components/SearchPage'
import PublishPage from './Components/PublishPage'


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
        },{
          path:'search',
          element:<SearchPage/>
        },{
          path:'publish',
          element:<PublishPage/>
        }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
