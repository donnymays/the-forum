import rootReducer from '../../reducers/index';
import {createStore} from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import postListReducer from '../../reducers/post-list-reducer';

let store = createStore(rootReducer);

describe('rootReducer', () =>  {
  test("should return default state if no action type is recognized", () => {
    expect(rootReducer({}, {type:null})).toEqual({
      masterPostList: {},
      formVisibleOnPage: false
    });
  });

    test('test that initial state of post list reducer matcher root reducer', () => {
      expect(store.getState().masterPostList).toEqual(postListReducer(undefined, { type: null }));
    });

    test('check that initial state of form visible reducer matches root reducer', () => {
      expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, {type: null}));
    })
})