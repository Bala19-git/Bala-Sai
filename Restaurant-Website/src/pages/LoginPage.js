import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './../components/Layout/Layout';
import { Box, TextField, Button, Typography, Card, CardContent, InputAdornment } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import { AuthContext } from '../pages/AuthContext';
import { FaUser, FaLock } from 'react-icons/fa';
import '../styles/Login.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const { setAuthState } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setErrorMessage('Please enter both username and password');
      return;
    }

    if (username === password) {
      setAuthState({ isLoggedIn: true, username });
      navigate('/');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <Layout>
      <div className="login-page">
        <Card className="login-card">
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <GroupIcon sx={{ fontSize: 60 }} />
            </Box>
            <Typography variant="h4" component="h2" align="center" gutterBottom>
              Login
            </Typography>
            <Box sx={{ mt: 3 }}>
              <TextField
                placeholder="Username"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaUser />
                    </InputAdornment>
                  ),
                }}
                sx={{ input: { fontSize: 14 }, '& .MuiInputLabel-root': { fontSize: 14 } }}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <TextField
                placeholder="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaLock />
                    </InputAdornment>
                  ),
                }}
                sx={{ input: { fontSize: 14 }, '& .MuiInputLabel-root': { fontSize: 14 } }}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Button onClick={handleLogin} variant="contained" color="primary" fullWidth>
                Login
              </Button>
            </Box>
            {errorMessage && (
              <Box sx={{ mt: 2 }}>
                <Typography color="error" align="center">
                  {errorMessage}
                </Typography>
              </Box>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default LoginPage;
