import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Services from './Services.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App/>,
      },
      {
        path : 'services',
        element : <Services/>,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}>
      <Layout />
    </RouterProvider>
  </StrictMode>,
)
