import React, { useContext } from 'react';
// import { ReactComponent as EditButtonSVG } from '../Assets/images/icon-edit.svg';

import { Context, ContextTypes } from '../../Context';

function AddComment() {
  const { userPicture, username } = useContext(Context) as ContextTypes;

  return (
    <div className="add-a-comment-content">
      <img src={userPicture} alt={username} />
      <textarea className="add-a-comment-textarea" placeholder="Add a comment... " rows={4} />
      <button type="button" className="send-button">SEND</button>
    </div>
  );
}

export default AddComment;
