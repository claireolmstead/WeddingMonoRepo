import React from 'react';
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const CORRECT_PASSWORD = 'password';

const Authenticate = () => {
    const navigate = useNavigate();

    const [password, setPassword] = useState<string>('');

    const onSubmit = () => {
        if (password == CORRECT_PASSWORD) {
            navigate('/home');
        }
    }

    return <div>
        <form onSubmit={onSubmit}>
            <input value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    </div>
}
export default Authenticate;
