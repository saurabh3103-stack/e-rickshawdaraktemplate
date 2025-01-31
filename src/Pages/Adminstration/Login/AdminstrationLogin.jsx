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
      <section className="auth bg-base d-flex flex-wrap">
        {/* <div className="auth-left d-lg-block d-none">
          <div className="d-flex align-items-center flex-column h-100 justify-content-center">
            <img src={'../Update/images/auth/auth-img.png'} alt="" />
          </div>
        </div>
         */}
        {/* <div className="auth-right py-32 px-24 d-flex flex-column justify-content-center">
          <div className="max-w-464-px mx-auto w-100">
            <div>
              <a href="index.html" className="mb-40 max-w-290-px">
                <img src="assets/images/logo.png" alt="" />
              </a>
              <h4 className="mb-12">Administration Login</h4>
              <p className="mb-32 text-secondary-light text-lg">
                Welcome back! please enter your detail
              </p>
            </div>
            <form action="#">
              <div className="icon-field mb-16">
                {error && <p style={{ color: 'red' }}>{error}</p>}

                <span className="icon top-50 translate-middle-y">
                  <iconify-icon icon="mage:email"></iconify-icon>
                </span>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="position-relative mb-20">
                <div className="icon-field">
                  <span className="icon top-50 translate-middle-y">
                    <iconify-icon icon="solar:lock-password-outline"></iconify-icon>
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'} 
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div>
                <span
                  className="toggle-password ri-eye-line cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light"
                  onClick={togglePasswordVisibility}
                >
                </span>
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
                  <a href="javascript:void(0)" className="text-primary-600 fw-medium">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                onClick={handleLogin}
                className="btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32"
              >
                LOGIN
              </button>
            </form>
          </div>
        </div> */}
      </section>
      
    </>
  );
}

export default AdminstrationLogin;
