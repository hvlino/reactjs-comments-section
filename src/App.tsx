import React, { useState } from 'react';
import './App.css';
import { User } from './models/User';
import SocialButton from './components/SocialButton';

function App() {
  const [fbUser, setFBUser] = useState('');
  const [fbPFP, setFBPFP] = useState('');

  const handleSocialLogin = (user: User) => {
    setFBUser(user._profile.name);
    setFBPFP(user._profile.profilePicURL);
  };

  const handleSocialLoginFailure = (err: Error) => err;

  return (
    <div className="App">
      { fbUser ? ''
        : (
          <div className="loginButton">
            <SocialButton
              provider="facebook"
              appId="321408663330272"
              onLoginSuccess={handleSocialLogin}
              onLoginFailure={handleSocialLoginFailure}
            >
              Login with Facebook
            </SocialButton>
          </div>
        )}

      <div className="userName">{fbUser}</div>
      <div className="userPFP">{fbPFP ? <img alt="user_pfp" src={fbPFP} /> : ''}</div>
    </div>
  );
}

export default App;

// _profile:

// profilePicURL: "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=524462816559
