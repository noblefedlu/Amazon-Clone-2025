import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { DataProvider } from './Components/DataProvidere/DataProvidere.jsx'
import { initialState, reducer } from './Utility/reducer.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    <DataProvider reducer={reducer} initialState={initialState}/>
  </StrictMode>,
)
