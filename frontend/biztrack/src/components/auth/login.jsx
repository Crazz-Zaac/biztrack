import { useState, useEffect } from 'react';

const Login = () => {
    const [userType, setUserType] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isTimedOut, setIsTimedOut] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO:Additional Logic
        console.log({ userType, user, password, rememberMe });
    };

    useEffect(() => {
        const timeoutDuration = 5 * 60 * 1000; // 5 minutes timer
        let timeout;

        const startTimeout = () => {
            timeout = setTimeout(() => {
                setIsTimedOut(true);
                // TODO: Additional Logic:
                alert("You've timed out");
            }, timeoutDuration);
        };

        const resetTimeout = () => {
            clearTimeout(timeout);
            setIsTimedOut(false);
            startTimeout();
        };

        window.addEventListener('mousemove', resetTimeout);
        window.addEventListener('keydown', resetTimeout);
        startTimeout();

        // clear listeners
        return () => {
            clearTimeout(timeout);
            window.removeEventListener('mousemove', resetTimeout);
            window.removeEventListener('keydown', resetTimeout);
        };
    }, []);
    return (
        <div className="flex justify-center items-center h-screen bg-primary">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-semibold text-center mb-4 underline">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">User Type</label>
                        <select
                            className="mt-1 block w-full px-3 py-2 border border-accent rounded-md shadow-sm focus:outline-none bg-accent sm:text-sm"
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                            required
                        >
                            <option value="">Select User Type</option>
                            <option value="admin">Admin</option>
                            <option value="staff">Staff</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-accent rounded-md focus:outline-none sm:text-sm"
                            placeholder="Username"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-accent rounded-md focus:outline-none sm:text-sm"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                            className="h-4 w-4 text-secondary"
                        />
                        <label className="ml-2 text-sm text-gray-700">Remember me</label>
                    </div>
                    <div className="flex justify-between flex-col items-center">
                        <button
                            type="submit"
                            className="w-full my-2 py-2 px-4 bg-primary text-white rounded-md hover:bg-secondary focus:outline-none"
                        >
                            Login
                        </button>
                        <a href="#" className="text-sm text-primary hover:text-secondary">Forgot password?</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

