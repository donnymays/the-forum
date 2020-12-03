import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <div onClick={() => props.whenPostClicked(props.id)} className="post">
      <h1>{props.title}</h1>
      <p><em>{props.author} | Votes: {props.voteCount}</em></p>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  autoher: PropTypes.string,
  voteCount: PropTypes.number,
  whenPostClicked: PropTypes.func
}

export default Post;

