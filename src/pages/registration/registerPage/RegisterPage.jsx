import { useState } from 'react';
import { Box } from '@mui/material';
// import { CheckBox } from '@mui/icons-material';
import './RegisterPage.css';
import { replace, useNavigate } from 'react-router';
export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState({});
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  //  -----------------------------validation---------------------------------------;
  function validate() {
    const regexEmail = /^\S+@\S+\.\S{2,}$/;
    const isEmailValid = regexEmail.test(email);
    // const isPasswordValid = password === confirmPassword && password.length >= 6;
    const isValid = {};
    let check = true;

    if (!isEmailValid) {
      isValid.email = `Please use the correct email`;
      check = false;
    }
    if (password.length < 6) {
      isValid.password = 'The password must be at least 6 numbers';
      check = false;
    } else if (password !== confirmPassword) {
      isValid.password = 'The passwords must be equil';
      check = false;
    }
    return { result: check, errors: isValid };
  }
  // --------------------------------------------- submit ------------------------------------------
  const FormSubmitHandle = e => {
    e.preventDefault();
    const validateErrors = validate();
    if (!validateErrors.result) {
      setErrors(validateErrors.errors);
      return;
    } else {
      setErrors({});
    }

    const userData = {
      email,
      password,
    };
    let users = [];
    // -------------------------------- get data from the local storage -------------------------------
    const localData = localStorage.getItem('users');
    if (localData) {
      users = JSON.parse(localData);
    }
    if (users.length === 0) {
      userData.role = 'admin';
    } else {
      userData.role = 'user';
    }
    const index = users.findIndex(u => u.email === userData.email);
    if (index !== -1) {
      alert(`This email ${userData.email} is already in use.`);
      return;
    }
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/', { replace: true });
  };
  const getError = prop => {
    return error[prop] ? (
      <span style={{ color: 'red', fontSize: '16px' }}>{error[prop]}</span>
    ) : null;
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
          onBlur={() => {
            const err = validate();
            setErrors(err.errors);
          }}
        />
        {getError('email')}
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
          onBlur={() => {
            const err = validate();
            setErrors(err.errors);
          }}
        />
        {getError('password')}

        <label>
          confirm rules
          <input type="checkbox" defaultChecked />
        </label>
        <button className="registerBtn">registration</button>
      </form>
    </Box>
  );
}
