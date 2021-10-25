import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations.js';

export const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = evt => {
    const { name, value } = evt.currentTarget;

       switch (name) {
        case 'name':
          setName(value);
          break;
  
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Registration</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name
          <input type="text" 
          name="name" 
          value={name} 
          required
          placeholder="name"
          onChange={handleInputChange} />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            required
            placeholder="email"
            onChange={handleInputChange}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            required
            placeholder="password"
            onChange={handleInputChange}
          />
        </label>

        <button type="submit">register</button>
      </form>
    </div>
  );
};

export default RegisterView;