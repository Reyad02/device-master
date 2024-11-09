import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route/Route.jsx'
import axios from 'axios'
import AuthProvider from './Provider/AuthProvider.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'
import { HelmetProvider } from 'react-helmet-async'

axios.baseUrl =

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider store={store} >
        <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
        </HelmetProvider>
      </Provider>
    </StrictMode>,
  )
