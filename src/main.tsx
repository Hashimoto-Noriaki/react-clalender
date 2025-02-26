import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import './styles/destyle.css'
import './styles/output.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-5xl font-bold underline">ハロー</h1>
    </div>
  </React.StrictMode>,
)
