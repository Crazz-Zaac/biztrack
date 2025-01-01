import { useState } from 'react';
const ChangePassowrd = () => {
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ password });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-primary">
            <div className="bg-white p-8 rounded-lg shadow-md w-96 mb-52 ">
                <h2 className="text-2xl font-semibold text-center mb-4 underline">Reset Password</h2>
                <form onSubmit={handleSubmit}>
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
                    <div className="flex justify-between flex-col items-center">
                        <button
                            type="submit"
                            className="w-full my-2 py-2 px-4 bg-primary text-white rounded-md hover:bg-secondary focus:outline-none"
                        >
                            Reset My Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChangePassowrd;

