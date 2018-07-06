import React from 'react';
import { Message } from 'semantic-ui-react';

const PostItem = ({message}) => {
  return (
    <Message className="post-item">
      <Message.Header>User</Message.Header>
      <p className="message-context">{message}</p>
    </Message>
  );
};

export default PostItem;
