import React, { useState } from 'react';

import ReactDOM from 'react-dom';
 
function SignInForm() {
    // State management
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent form's default submission behavior

        // Here you would verify the user's credentials (hardcoded for this example)
        const hardcodedUsername = 'user1';
        const hardcodedPassword = 'password123';

        if (username === hardcodedUsername && password === hardcodedPassword) {
            setMessage('Sign-in successful! Welcome!');
        } else {
            setMessage('Sign-in failed! Invalid username or password.');
        }
    };

    return (
        <div  >
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                {/* Username input */}
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                {/* Password input */}
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {/* Submit button */}
                <button type="submit">Sign In</button>
            </form>

            {/* Display feedback message */}
            {message && <p>{message}</p>}
        </div>
    );
}
function App() {
    return (
        <div>
           < SignInForm/>
        </div>
    );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




export default SignInForm;

const dataToSend = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: 'password123',
};

fetch('http://localhost:4000/api/users/create', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json', // Specify that the request body is JSON
    },
    body: JSON.stringify(dataToSend), // Convert data to JSON
})
.then(response => response.json())
.then(data => {
    console.log('Server response:', data);
    // Handle the server response
})
.catch(error => {
    console.error('Error:', error);
    // Handle any errors
});