import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';


class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null,
      editing: false,
    };
  }
  handleClick = () => {
    if ( this.state.selectedPost != null) {
      this.setState({
        selectedPost: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const action = a.addPost(newPost);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.masterPostList[id];
    this.setState({selectedPost: selectedPost});
  }

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteTicket(id);
    dispatch(action);
    this.setState({selectedTicket: null});
  }

  handleEditClick = () => {
    this.setState({editing: true})
  }

  handleEditingPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const action = a.addTicket(ticketToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedTicket: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if ( this.state.editing ) {
      currentlyVisibleState = <EditPostForm
      post = {this.state.selectedPost}
      onEditPost = {this.handleEditingPostInList} />
      buttonText = "Return to Post List"
    } else if (this.state.selectedPost != null) {
      currentlyVisibleState = <PostDetail 
      post = {this.state.selectedPost}
      onClickingDelete = {this.handleDeletingPost}
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Post List"
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm
      onNewPostCreation = {this.handleAddingNewPostToList} />
      buttonText = "Return to Post List"
    } else {
      currentlyVisibleState = <PostList
      postList = {this.props.masterPostList}
      onPostSelection = {this.handleChangingSelectedPost} />
      buttonText = "Add Post"
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

PostControl.propTypes = {
  masterPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterPostList: state.masterPostList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;