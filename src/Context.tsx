import React, {
  createContext, useState, useMemo,
} from 'react';
import axios from 'axios';
import { User } from './models/User';
import { Comment } from './models/Comment';

interface CommentProps {
    children: JSX.Element;
}
interface IhandleSocialLogin {
    (user: User):void;
}
interface IhandleSocialLoginFailure {
    (err: Error):Error;
}
interface IfetchComments {
  ():Promise<Comment[]>;
}
export interface ContextTypes {
    username: string,
    userPicture: string,
    comments: Comment[],
    handleSocialLogin: IhandleSocialLogin,
    handleSocialLoginFailure: IhandleSocialLoginFailure,
    setComments: React.Dispatch<React.SetStateAction<Comment[]>>,
    fetchComments: IfetchComments,
}
export const Context = createContext<ContextTypes | null>(null);

function Provider({ children }:CommentProps) {
  const [username, setUsername] = useState('');
  const [userPicture, setUserPicture] = useState('');

  const [comments, setComments] = useState<Comment[]>([]);

  const handleSocialLogin = (user: User) => {
    setUsername(user._profile.name);
    setUserPicture(user._profile.profilePicURL);
  };

  const fetchComments = async () => {
    const result = await axios
      .get('https://626c36e250a310b8a341c3e2.mockapi.io/comments/');
    return result.data;
  };

  const handleSocialLoginFailure = (err: Error) => err;
  const values = useMemo(() => ({
    username,
    userPicture,
    handleSocialLogin,
    handleSocialLoginFailure,
    comments,
    setComments,
    fetchComments,
  }), [comments]);

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  );
}

export default Provider;
