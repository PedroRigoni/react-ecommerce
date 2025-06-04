import { Header } from "./components/Header"
import { GlobalStyle } from "./global"
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./router"


function App() {
 

  return (
  
      <BrowserRouter>
      <Header/>
      <Router /> 
      
      
      <GlobalStyle/>
      </BrowserRouter>

     
  )
}

export default App
