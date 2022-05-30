import './App.css';
import { User } from './models/User';
import SocialButton from './components/SocialButton';

function App() {
  const handleSocialLogin = (user: User) => user._profile.name;

  const handleSocialLoginFailure = (err: Error) => err;
  return (
    <div className="App">
      <div>
        <SocialButton
          provider="facebook"
          appId="321408663330272"
          onLoginSuccess={handleSocialLogin}
          onLoginFailure={handleSocialLoginFailure}
        >
          Login with Facebook
        </SocialButton>
      </div>
    </div>
  );
}

export default App;

// _profile:

// profilePicURL: "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=524462816559
