import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { routes } from "./routes";
import { dummy } from './reducers/dummy'

// Styles imports
import './App.css'
import './styles/style.css'

// TODO: When several reducers exists, combine them into 'one'
const reducer = combineReducers({
  dummy: dummy.reducer
})

const store = configureStore({ reducer })


function App() {
  // I used hardcoded location for now (Stockholm)
  return (
    <Provider store={store}>
      <div className="app">
        <BrowserRouter>{routes()}</BrowserRouter>
      </div>
    </Provider>
    
    // <>
    //   <h1>TrailSeeker</h1>
    //   <HomePage userLocation="18.0649,59.3293" />
    // </>
  )
}

export default App
