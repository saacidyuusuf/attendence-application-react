import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import supabase from '../lib/supabase'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useNavigate()

  const handleLogin = async () => {
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        console.log('Error:', error.message);
      } else {
        console.log('User:', user);
        router.push('/dashboard'); 
      }
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        console.log(event, session)
      } else if (event === 'SIGNED_OUT') {
        // The user has signed out
        console.log(event)
        // Remove the user data from the cookie or local storage
      }
    });
  }, [supabase.auth]);

  return (
    <div className="login">
      <h1>Student Attendence</h1>
      <span>Sign in with your email and password</span>
      <div className="inputContainer">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Sign in</button>
    </div>
  );
};

export default Login;