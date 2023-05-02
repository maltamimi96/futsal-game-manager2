import FutsalField from "./components/FutsalField"
import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<FutsalField />} />
            <Route path="/a" element={<Navbar />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
