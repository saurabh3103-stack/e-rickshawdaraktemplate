import React, { useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';

function Login() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  useEffect(() => {
    document.body.classList.add('bg-one');
    return () => {
      document.body.classList.remove('bg-one');
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      // Sending POST request to the backend API
      const response = await fetch('http://localhost:3002/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'your_secret_key',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      // console.log(data.admin._id);
      if (response.ok) {
        localStorage.setItem('session', 'true');
        localStorage.setItem('user_type', 'admin');
        localStorage.setItem('user_email', email); // Store user email
        localStorage.setItem('user_id', data.admin._id); // Store user ID
        localStorage.setItem('auth_token', data.token); // Store JWT token

        navigate('/admin/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setError('An error occurred. Please try again later.');
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <section class="hold-transition login-page">
        <div  class="login-box">
          <div class="card card-outline card-primary">
          <div class="card-header text-center">
            <Link href="/" class="h2"><b>Admin</b> Login</Link>
          </div>
        <div class="card-body">
        <p class="login-box-msg">Welcome back! please enter your detail
        </p>
          <div className="max-w-464-px mx-auto w-100">
          
            <form onSubmit={handleLogin}>
              {error && <p style={{ color: 'red' }}>{error}</p>} 
              <div className="input-group mb-3">
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                 <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
                <div  className="input-group mb-3">
                 
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
                </div>
                
              
              <div className="">
                <div className="d-flex justify-content-between gap-2">
                  <div className="form-check style-check d-flex align-items-center">
                    <input
                      className="form-check-input border border-neutral-300"
                      type="checkbox"
                      value=""
                      id="remeber"
                    />
                    <label className="form-check-label" htmlFor="remeber">
                      Remember me
                    </label>
                  </div>
                  <a
                    href="javascript:void(0)"
                    className="text-primary-600 fw-medium"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className="input-group mb-3 mt-3">
              <button
                  type="submit"
                  className="btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32"
                >
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
