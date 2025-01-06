import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.jsx'

/**
 * store.js file is imported within <React.StrictMode>. 
 * <Provider> from react-redux supplies the Redux store to all 
 * components within its hierarchy by passing store as props. 
 * This allows components, including <App />, to access and 
 * interact with the Redux store for state management.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
