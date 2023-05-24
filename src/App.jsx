import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { Navbar } from "./components/Navbar"
// import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
