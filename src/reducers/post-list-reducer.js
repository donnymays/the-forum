import * as c from './../actions/ActionTypes';

export default ( state = {}, action ) => {
  const { title, content, author, voteCount, timestamp, id} = action;
  switch ( action.type ) {
  case c.ADD_POST:
    
    return Object.assign({},state,{
      [id]: {
        title: title,
        content: content,
        author: author,
        voteCount: voteCount,
        timestamp: timestamp,
        id: id
      }
    });
  case c.DELETE_POST:
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};