import React from 'react';

function Comment({comment}) {
  return (
    <li>{comment.content} - {comment.author.name}</li>
  );
}

export default Comment;