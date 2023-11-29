import { BrowserRouter } from "react-router-dom";
import './App.css'
import { routes } from "./routes";

function App() {
  // I used hardcoded location for now (Stockholm)
  return (
    <BrowserRouter>{routes()}</BrowserRouter>
    
    // <>
    //   <h1>TrailSeeker</h1>
    //   <HomePage userLocation="18.0649,59.3293" />
    // </>
  )
}

export default App
