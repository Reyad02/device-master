import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route/Route.jsx'
import axios from 'axios'
import AuthProvider from './Provider/AuthProvider.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'

axios.baseUrl =

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider store={store} >
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </Provider>
    </StrictMode>,
  )
