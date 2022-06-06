import React, { useState } from 'react';
import './App.scss';
import { User } from './models/User';
import SocialButton from './components/SocialButton';
import { ReactComponent as DeleteButtonSVG } from './Assets/images/icon-delete.svg';
import { ReactComponent as EditButtonSVG } from './Assets/images/icon-edit.svg';
import { ReactComponent as ReplyButtonSVG } from './Assets/images/icon-reply.svg';
import AmyRobsonPNG from './Assets/avatars/image-amyrobson.png';

function App() {
  const [username, setUsername] = useState('');
  const [userPicture, setUserPicture] = useState('');

  const handleSocialLogin = (user: User) => {
    setUsername(user._profile.name);
    setUserPicture(user._profile.profilePicURL);
  };

  const handleSocialLoginFailure = (err: Error) => err;

  return (
    <div className="App">
      { username ? ''
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
      <div className="comment-users-container">
        <div className="comment">
          <div className="comment-votes-content">
            <div className="comment-button-plus">+</div>
            <div className="comment-votes">0</div>
            <div className="comment-button-minus">-</div>
          </div>
          <div className="comment-body">
            <div className="comment-header">
              <div className="comment-profile">
                <div className="profile-picture"><img src={AmyRobsonPNG} alt="amyrobson" /></div>
                <div className="username">amyrobson</div>
                <div className="posted-time">4 days ago</div>
              </div>
              <div className="comment-buttons">
                <div className="reply-content">
                  <ReplyButtonSVG />
                  <button className="reply-button" type="button">Reply</button>
                </div>
              </div>
            </div>
            <div className="comment-content">I couldn&apos;t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.</div>
          </div>
        </div>
      </div>
      <div className="comment-you-container">
        <div className="comment">
          <div className="comment-votes-content">
            <div className="comment-button-plus">+</div>
            <div className="comment-votes">0</div>
            <div className="comment-button-minus">-</div>
          </div>
          <div className="comment-body">
            <div className="comment-header">
              <div className="comment-profile">
                <div className="profile-picture"><img src={userPicture} alt={username} /></div>
                <div className="username">{username}</div>
                <div className="you-tag">you</div>
                <div className="posted-time">2 days ago</div>
              </div>
              <div className="comment-buttons">
                <div className="delete-content">
                  <DeleteButtonSVG />
                  <button className="delete-button" type="button">Delete</button>
                </div>
                <div className="edit-content">
                  <EditButtonSVG />
                  <button className="edit-button" type="button">Edit</button>
                </div>
              </div>
            </div>
            <div className="comment-content">I couldn&apos;t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.</div>
          </div>
        </div>
      </div>
      <div className="comment-users-reply-container">
        <div className="comment">
          <div className="comment-votes-content">
            <div className="comment-button-plus">+</div>
            <div className="comment-votes">0</div>
            <div className="comment-button-minus">-</div>
          </div>
          <div className="comment-body">
            <div className="comment-header">
              <div className="comment-profile">
                <div className="profile-picture"><img src={AmyRobsonPNG} alt="amyrobson" /></div>
                <div className="username">amyrobson</div>
                <div className="posted-time">4 days ago</div>
              </div>
              <div className="comment-buttons">
                <div className="reply-content">
                  <ReplyButtonSVG />
                  <button className="reply-button" type="button">Reply</button>
                </div>
              </div>
            </div>
            <div className="comment-content">I couldn&apos;t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.</div>
          </div>
        </div>
      </div>
      <div className="add-a-comment-content">
        <div className="profile-picture"><img src={userPicture} alt={username} /></div>
        <textarea className="add-a-comment-textarea" placeholder="Add a comment... " rows={4} />
        <button type="button" className="send-button">SEND</button>
      </div>
    </div>
  );
}

export default App;

// _profile:

// profilePicURL: "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=524462816559
