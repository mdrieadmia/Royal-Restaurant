import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './porviders/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <HelmetProvider>
        <div className='max-w-screen-xl mx-auto px-5'>
          <RouterProvider router={Router} />
        </div>
      </HelmetProvider>
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
