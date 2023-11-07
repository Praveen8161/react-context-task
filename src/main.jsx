import React from 'react'
import ReactDOM from 'react-dom/client'
import CartContext from './Context/CartContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContext>
      <App/>
    </CartContext>
  </React.StrictMode>,
)
