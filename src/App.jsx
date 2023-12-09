import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { routes } from "./routes";
import { like } from "./reducers/heart";
import { comments } from './reducers/comments'
import { trails } from './reducers/trails'

// Styles imports
import './styles/style.css'
import { Title } from "./components/Title";

// TODO: When several reducers exists, combine them into 'one'
const reducer = combineReducers({
  comments: comments.reducer,
  like: like.reducer,
  trails: trails.reducer,
});

const store = configureStore({ reducer })


function App() {
  // I used hardcoded location for now (Stockholm)
  return (
    <Provider store={store}>
      <div className="app">
        <BrowserRouter>
          <Title />
          {routes()}
        </BrowserRouter>
      </div>
    </Provider>
    
    // <>
    //   <h1>TrailSeeker</h1>
    //   <HomePage userLocation="18.0649,59.3293" />
    // </>
  )
}

export default App
