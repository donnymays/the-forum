import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';


describe('the forum actions', () => {
  it('deletePost should create DELETE_POST action', () => {
    expect(actions.deletePost(1)).toEqual({
      type: c.DELETE_POST,
      id: 1
    });
  
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addTicket should create ADD_POST action', () => {
    expect(actions.addPost({
      title:'Cereral - Is is soup?',
      content:'My mom says no',
      author:'userDave',
      voteCount:0,
      timestamp:null,
      id: 1 
      })).toEqual({
      type: c.ADD_POST,
      title:'Cereral - Is is soup?',
      content:'My mom says no',
      author:'userDave',
      voteCount:0,
      timestamp:null,
      id: 1
    });
  });

})
