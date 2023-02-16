import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CORRECT_PASSWORD } from '../../vars';

interface AuthenticateProps {
  setAuthenticated: () => void;
}

const Authenticate = ({ setAuthenticated }: AuthenticateProps) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>('');

  const onSubmit = () => {
    if (password == CORRECT_PASSWORD) {
      setAuthenticated();
      navigate('/home');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Authenticate;
