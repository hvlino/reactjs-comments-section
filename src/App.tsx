import React, { useContext, useEffect } from 'react';
import './App.scss';
import { Context, ContextTypes } from './Context';
// import SocialButton from './components/SocialButton';
import Comment from './components/Comment/Comment';
import AddComment from './components/AddComment/AddComment';

function App() {
  const {
    // username,
    // handleSocialLogin,
    // handleSocialLoginFailure,
    fetchComments,
    comments,
    setComments,
  } = useContext(Context) as ContextTypes;

  useEffect(() => {
    (async () => {
      const result = await fetchComments();
      setComments(result);
    }
    )();
  }, []);

  return (
    <div className="App">
      <Comment />
      <p>{JSON.stringify(comments)}</p>
      <AddComment />
      {/* <div className="comment-users-container">
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
              <div className="comment-content">
              I couldn&apos;t agree more with this.
              Everything moves so fast and it always seems like
              everyone knows the newest library/framework.
              But the fundamentals are what stay constant.
              </div>
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
            <div className="comment-content">
            I couldn&apos;t agree more with this.
            Everything moves so fast and it always
            seems like everyone knows the newest
            library/framework. But the fundamentals
            are what stay constant.
            </div>
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
            <div className="comment-content">
            I couldn&apos;t agree more with this.
            Everything moves so fast and it always seems
            like everyone knows the newest library/framework.
            But the fundamentals are what stay constant.
            </div>
          </div>
        </div>
      </div>
      */}
    </div>
  );
}

export default App;

// _profile:

// profilePicURL: "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=524462816559
