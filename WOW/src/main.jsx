import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './Client/Pages/Home'
import './index.css'
import SearchPage from './Client/Components/SearchPage'
import SignupPage from './Client/Components/SignUpPage'
import AboutPage from './Client/Components/Aboutus'
import PublishPage from './Client/Components/PublishPage'
import LoginPage from './Client/Components/LoginPage'
import ContactPage from './Client/Components/ContactUs'
import AboutPage from './Client/Components/Aboutus'

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
        },{
          path:'login',
          element:<LoginPage/>
        },{
          path:'signup',
          element:<SignupPage/>
        },
        {
          path:'aboutus',
          element:<AboutPage/>
        },{
          path:'contact',
          element:<ContactPage/>
        }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)