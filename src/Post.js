import React from 'react';

import Comment from './Comment';

function Post({post}) {
  return (
    <li>
      {post.content} - {post.date}
      <br/> 
      <ul>
        {post.comments.map(comment =>
          <Comment key={comment.id} comment={comment} />
        )}
      </ul>
    </li>
  )
}

export default Post