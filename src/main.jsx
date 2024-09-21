import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
/*pages */
import HomePage from './pages/HomePage.jsx'
import CartPage from './pages/CartPage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import CheckoutPage from './pages/CheckoutPage.jsx'
import OrderComfirmationPage from './pages/OrderComfirmationPage.jsx'

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
      },
      {
        path: '/checkout',
        element: <CheckoutPage/>
      },
      {
        path: '/order',
        element: <OrderComfirmationPage/>
      }
    ] 
  
  }
])
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
       <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
