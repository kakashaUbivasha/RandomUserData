import MainRouter from "./router/router.jsx";
import { BrowserRouter } from "react-router-dom";
import './App.css'

function App() {

  return (
      <BrowserRouter>
        <MainRouter/>
      </BrowserRouter>
  )
}

export default App
