import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/*pages */
import HomePage from './pages/HomePage.jsx'
import CartPage from './pages/CartPage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '/cart',
        element: <CartPage/>
      },
      {
        path: '/contact',
        element: <ContactPage/>
      },
      {
        path: '/shop',
        element: <ShopPage/>
      },
      {
        path: '/about',
        element: <AboutPage/>
      }
    ] 
  
  }
])
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
