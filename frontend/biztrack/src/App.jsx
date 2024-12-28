import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/auth/login"
import Landing from "./components/LandingPage";
import NotFound from "./components/NotFound";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/auth/login" element={<Login />} />
                {/* Catch all for 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>

    )
}

export default App
