import React from 'react';
// import { ReactComponent as DeleteButtonSVG } from '../Assets/images/icon-delete.svg';
// import { ReactComponent as EditButtonSVG } from '../Assets/images/icon-edit.svg';
import { ReactComponent as ReplyButtonSVG } from '../../Assets/images/icon-reply.svg';
import AmyRobsonPNG from '../../Assets/avatars/image-amyrobson.png';
// import { Context } from '../Context';

function Comment() {
  // const { comment } = useContext(Context);

  return (
    <>
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
            <div className="comment-content">
              I couldn&apos;t agree more with this.
              Everything moves so fast and it always seems
              like everyone knows the newest library/framework.
              But the fundamentals are what stay constant.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="comment-you-container">
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
            <div className="comment-content">I couldn&apos;t agree more with this.
            Everything moves so fast and it always seems like everyone knows
            the newest library/framework.
            But the fundamentals are what stay constant.</div>
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
            Everything moves so fast and it always seems like everyone
            knows the newest library/framework.
            But the fundamentals are what stay constant.</div>
          </div>
        </div>
      </div>
       */}
    </>
  );
}

export default Comment;
