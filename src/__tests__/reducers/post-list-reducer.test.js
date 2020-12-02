import postListReducer from '././../../reducers/post-list-reducer';
import * as c from './../../actions/ActionTypes'

describe('postListReducer', () => {

  let action;
  const postData = {
    title:'Cereral - Is it soup?',
    content:'My mom says no',
    author:'userDave',
    voteCount:0,
    timestamp:null,
    id: 1
  };

  const currentState = {
  1: {
    title:'Cereral - Is it soup?',
    content:'My mom says no',
    author:'userDave',
    voteCount:0,
    timestamp:null,
    id: 1 },
  2: {
    title:'Hot Dog - Is it sandwich?',
    content:'My mom says yes',
    author:'userJoe',
    voteCount:0,
    timestamp:null,
    id: 2 }
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });
  
  test('Should successfully add new post data to masterPostList', () => {
    const { title, content, author, voteCount, timestamp, id } = postData;
    
    action = {
      type: c.ADD_POST,
      title: title,
      content: content,
      author: author,
      voteCount: voteCount,
      timestamp: timestamp,
      id: id
    };

    expect(postListReducer({}, action)).toEqual({
      [id] : {
        title: title,
        content: content,
        author: author,
        voteCount: voteCount,
        timestamp: timestamp,
        id: id
      }
    });
  });

  test('Should successfully delete a post', () => {
    action = {
      type: c.DELETE_POST,
      id: 1
    };
    expect(postListReducer(currentState, action)).toEqual({
      2: {
        title:'Hot Dog - Is it sandwich?',
        content:'My mom says yes',
        author:'userJoe',
        voteCount:0,
        timestamp:null,
        id: 2 }
    });
  });
});