import React from 'react';
import PostItem from '../components/PostItem';
import {messageSplitter} from '../utils/util';

const postRows = (postList) => {
  const postRows = postList.map(item => [
    <PostItem key={item} 
      message={item} 
      />
  ]);
  return postRows;
}

const PostBoard = ({post}) => {
  const results = messageSplitter(post);
  const rows = postRows(results);
  return (
    <div className="post-board">{rows}</div>
  )
}

export default PostBoard;
