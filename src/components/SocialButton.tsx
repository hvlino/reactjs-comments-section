import React from 'react';
import SocialLogin from 'react-social-login';

interface SocialButtonProps {
  triggerLogin: React.MouseEventHandler<HTMLButtonElement>,
  children: JSX.Element
}
class SocialButton extends React.PureComponent<SocialButtonProps> {
  render() {
    const { children, triggerLogin } = this.props;
    return (
      <button type="button" onClick={triggerLogin} className="social-button">
        {children}
      </button>
    );
  }
}

export default SocialLogin(SocialButton);
