import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Home/HomePage'
import Login from './Auth/Login';
import Signup from './Auth/Signup';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          
          {/* "/about" = about page */}
          {/* <Route path="/about" element={<AboutPage />} /> */}
        </Routes>
      </Router>
    </ChakraProvider>
    </>
  )
}

export default App
