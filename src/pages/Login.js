import React from 'react'

function Login() {
  return (
   
      
            <div className="login-container">
              <div className="navigation-logo-container">
                <div className="nav-logo">
                  <img src="images/Spotify_Logo_CMYK_Green.png" alt="" className="nav-logo-spotify" />
                </div>
              </div>
              <div className="login-content-container">
                <div className="login-content">
                  <h1 className="log-text">Log in to Spotify</h1>
                  <div className="buttons-list">
                    <ul>
                      <li>
                        <button className="btn-one">
                          <span className="btn-google-img"><img src="./IMAGES/google-icon.png" width="20px" height="20px" /></span>
                          <span className="btn-inner-text">Continue with Google</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn-one">
                          <span className="btn-fb-img"><img src="./IMAGES/facebook (2).png" width="23px" /></span>
                          <span className="btn-inner-text">Continue with Facebook</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn-one">
                          <span className="btn-mac-img"><img src="./IMAGES/apple logo.png" width="22px" /></span>
                          <span className="btn-inner-text">Continue with Apple</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn-one">
                          <span className="btn-inner-text">Continue with phone number</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <hr className="login-line" />
                  <div className="login-data-container">
                    <form action>
                      <div className="userdata-one">
                        <label htmlFor className="user-label">Email or username</label>
                        <br />
                        <input type="text" placeholder="Email or username" className="user-input" required />
                      </div>
                      <br />
                      <div className="userdata-two">
                        <label htmlFor className="password-label">Password</label>
                        <br />
                        <input type="password" className="password-input" placeholder required />
                      </div>
                      <div className="toggle-container">
                        <div className="toggle-one">
                          <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider round" />
                          </label>
                        </div>
                        <div className="toggle-two">
                          Remember me
                        </div>
                      </div>
                      <button className="btn-log">Log In</button>
                      <a href className="f-y">Forgot your password?</a>
                    </form>
                    <div>
                    </div>
                  </div>
                  <hr className="login-line-two" />
                  <div className="spotify-signup">
                    <span className="d-acc">Don't have an account? <a href className="su-link">Sign up for Spotify</a></span>
                  </div>
                  <div className="ft-container">
                    <small className="login-footer">This site is protected by reCAPTCHA and the Google
                      <a href className="lf-link">Privacy Policy</a> and 
                      <a href className="lf-link">Terms of Service</a>
                      apply.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          );
        }
  

export default Login