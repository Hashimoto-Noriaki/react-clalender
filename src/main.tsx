import React from 'react'
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'
import  RecoilRoot from 'react'
import './styles/index.css'
import './styles/destyle.css'
import './styles/output.css'
import { router } from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router}/>
    </RecoilRoot>
  </React.StrictMode>
)
