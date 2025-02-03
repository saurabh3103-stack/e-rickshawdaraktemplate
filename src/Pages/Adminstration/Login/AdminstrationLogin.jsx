import React, { useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
function AdminstrationLogin() {
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

  const handleLogin = (e) => {
    e.preventDefault(); 
    console.log('Form Data:', formData);  
    if (formData.email === 'sb652515@gmail.com' && formData.password === '123456') {
      localStorage.setItem('session', 'true'); 
      localStorage.setItem('user_type', 'administration'); 
      localStorage.setItem('user_email', formData.email); 
      console.log('Login Success');
      navigate('/administration/dashboard'); 
    } else {
      setError('Invalid email or password');
      console.log('Login Fail');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <>
    <div class="hold-transition login-page">
    <div class="login-box">
  <div class="card card-outline card-primary">
    <div class="card-header text-center">
      <Link href="/" class="h2"><b>Administration</b> Login</Link>
    </div>
    <div class="card-body">
      <p class="login-box-msg">Welcome back! please enter your detail
      </p>

      <form action="#" method="post">
        <div class="input-group mb-3">
          <input type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  id="email"
                   class="form-control" placeholder="Email"/>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input  type={showPassword ? 'text' : 'password'} 
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    id="password" class="form-control" placeholder="Password"/>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input  type="checkbox"
                      value=""
                      id="remeber"/>
              <label for="remember">
                Remember Me
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit"
                onClick={handleLogin} class="btn btn-primary btn-block">Sign In</button>
          </div>
        </div>
      </form>    
      <p class="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      
    </div>
  </div>
</div>
</div>
    </>
  );
}

export default AdminstrationLogin;
