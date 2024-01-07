import {BrowserRouter, Routes, Route} from "react-router-dom"

//pages and components
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import AboutUs from "./pages/AboutUs"
import Footer from "./components/Footer"
import ContactUs from "./pages/ContactUs"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Navbar />
            <div className="pages">
                <Routes>
                <Route 
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/apie-mus"
                    element={<AboutUs />}
                />
                <Route
                    path="/susisiekite"
                    element={<ContactUs />}
                />
                </Routes>
            </div>
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default App
