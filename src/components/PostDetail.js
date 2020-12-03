import React from 'react';
import PropTypes from 'prop-types';

function PostDetail(props){
  const { post, onClickingUpvote, onClickingDownvote, onClickingDelete } = props;

  return (
    <React.Fragment>
      <div className="post">
        <h1>{props.title}</h1>
        <p><em>{props.author} | Votes: {props.voteCount}</em></p>
        <h3>{props.content}</h3>
        <p><em>- {props.timestamp}</em></p>
        <button onClick={()=> onClickingUpvote(post.id) }>+</button>
        <button onClick={()=> onClickingDownvote(post.id)}>-</button>
        <button onClick={props.onClickingEdit}>Edit Post</button>
        <button onClick={()=> onClickingDelete(post.id)}>Delete Post</button>
      </div>
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingUpvote: PropTypes.func,
  onClickingDownvote: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
};

export default PostDetail;