import { useState } from 'react';
import { Box } from '@mui/material';
// import { CheckBox } from '@mui/icons-material';
import './RegisterPage.css';
export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const FormSubmitHandle = e => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    const regexEmail = /^\S+@\S+\.\S{2,}$/;
    const isEmailValid = regexEmail.test(email);
    const isPasswordValid = password === confirmPassword;
    if (!isEmailValid) {
      setError('email is not common');
    }
    if (!isPasswordValid) {
      setError('the passwords are different');
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '20px',
        paddingBottom: '20px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Registration</h1>
      <form
        onSubmit={FormSubmitHandle}
        // onsubmit='function(event)' for bare js
        style={{
          width: '400px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          padding: '40px',
          background: 'white',
          borderRadius: '8px',
        }}
      >
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          onChange={e => setConfirmPassword(e.target.value)}
        />

        <label>
          confirm rules
          <input type="checkbox" defaultChecked />
        </label>
        <button className="registerBtn">registration</button>
      </form>
    </Box>
  );
}
