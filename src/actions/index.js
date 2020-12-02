import * as c from './../actions/ActionTypes';

export const deletePost = id => ({
  type: c.DELETE_POST,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addPost = (post) => {
  const { title, content, author, voteCount, timestamp, id } = post;
  return {
      type: c.ADD_POST,
      title: title,
      content: content,
      author: author,
      voteCount: voteCount,
      timestamp: timestamp,
      id: id 
  }
}