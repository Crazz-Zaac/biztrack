import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/auth/Login"
import NotFound from "./components/NotFound";
import ChangePassword from './components/auth/ChangePassword';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/auth/change_password" element={<ChangePassword />} />
                {/* Catch all for 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>

    )
}

export default App
