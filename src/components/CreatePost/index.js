import React, { Component } from 'react'
import shortid from "shortid";
import AllPosts from '../AllPost';
import { createNewPost, handleTitle, handleDescr, handleTitleUpdate, handleDescrUpdate, editPost, updatePost, cancelUpdatePost, deletePost } from '../../Redux/index';
import { connect } from 'react-redux';

class createPost extends Component {


    createPostBtn = () => {
        let u_id = shortid.generate();
        let currPosts = this.props.postList;
        let postItem = {
            id : u_id,
            title : this.props.stateObj.newPostTitle,
            description : this.props.stateObj.newPostDescr
        }

        currPosts.push(postItem);

        this.props.handleCreatePost(currPosts)


    }

    // Handle Post Edit Button
    postEditing = id => {
        let postDuplicate = [...this.props.postList];

        let editPostindex = postDuplicate.findIndex( post => {
            if(post.id === id){
                return post
            }
        })

        let activePost =  postDuplicate[editPostindex];

        this.props.handlePostEdit(activePost,editPostindex)

    }

    // Handle Post Update Button
    handleUpdateBtn = () => {
        let postDuplicate = [...this.props.postList];
        let activeIndex = this.props.currEditIndex;

        let updatedItem = {
            id : this.props.currEditPost.id,
            title : this.props.editTitle,
            description : this.props.editDescr
        }

        postDuplicate[activeIndex] = updatedItem

        this.props.handlePostUpdate(postDuplicate)
    }


    // Handle Delete Button 

    postDelete = id => {
        if(window.confirm("Are you sure to delete this Post ?")){

            let postDuplicate = [...this.props.postList];

            let editPostindex = postDuplicate.findIndex( post => {
                if(post.id === id){
                    return post
                }
            })
            postDuplicate.splice(editPostindex, 1);

            this.props.handleDeletePost(postDuplicate)
        } 

    }


    render() {

        const isEditing = this.props.isEditSet

        return (
            <>
                <div className='create_post'>
                    <div className='header p-2'>
                        <div className='container'>
                            <h2 className='text-center text-light'>Create/Update Post</h2>
                        </div>
                    </div>

                    {/* Post Form */}

                    <div className='post_form mb-5'>
                        <div className='container'>
                            <div className='pt-5 pl-5 pr-5 pb-2 w-75 mx-auto'>
                                
                                <form>

                                    <div className="form-group">
                                        <label htmlFor="postTitle">Post Title</label>
                                        {
                                            isEditing ? (
                                                <input type="text" className='form-control' name='sdf' onChange={ e => this.props.handleTitleInputChange(e.target.value)} value={this.props.editTitle} />
                                            ):(
                                                <input type="text" className='form-control' name='postTitle' onChange={ e => this.props.handleTitleInput(e.target.value)} value={this.props.currTitle} />
                                            )
                                        }
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="postDescr">Post Description</label>
                                        {
                                            isEditing ? (
                                                <textarea className="form-control" name='bsdf' onChange={ e => this.props.handleDescrInpChange(e.target.value)} value={this.props.editDescr} rows="5"/>
                                            ):(
                                                <textarea className="form-control" name='postDescr' onChange={ e => this.props.handleDescrInp(e.target.value)} value={this.props.currDescr} rows="5"/>
                                            )
                                        }
                                    </div>
                                </form>

                            </div>

                            <div className='btn_div text-center mt-3'>
                                {
                                    isEditing ? (
                                        <>
                                            <button className='btn btn-success w-25 mr-3' onClick={this.handleUpdateBtn} >Update</button>
                                            <button className='btn btn-danger w-25' onClick={this.props.handleCancelUpdate}>Cancel</button>
                                        </>
                                        ):(
                                        <button className='btn btn-success' onClick={this.createPostBtn}>Create Post</button>
                                            
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <AllPosts setEditPost={this.postEditing} deletePost={this.postDelete} />
            </>
        )
    }
}


const mapStateToProps = state => {
    return {
        stateObj : state,
        postList : state.posts,
        currTitle : state.newPostTitle,
        currDescr : state.newPostDescr,
        isEditSet : state.isEdit,
        currEditIndex : state.activeEditPostIndex,
        currEditPost : state.activeEditPost,
        editTitle : state.updateTitle,
        editDescr : state.updateDescr,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        // Handle New Inputs
        handleTitleInput: (inpVal) => dispatch(handleTitle(inpVal)),
        handleDescrInp: (inpVal) => dispatch(handleDescr(inpVal)),

        // Handle New Post Creation
        handleCreatePost : newPostArr => dispatch(createNewPost(newPostArr)),
        
        // Handle Edit Post
        handlePostEdit : (activePost, activeIndex) => dispatch(editPost(activePost, activeIndex)),

        // Handle Edit Inputs Change
        handleTitleInputChange : updatedVal => dispatch(handleTitleUpdate(updatedVal)),
        handleDescrInpChange : updatedVal => dispatch(handleDescrUpdate(updatedVal)),

        // Handle Post Update
        handlePostUpdate : updatedPostArr => dispatch(updatePost(updatedPostArr)),

        // Handle Cancel Update
        handleCancelUpdate : () => dispatch(cancelUpdatePost()),

        // Handle Delete Post
        handleDeletePost : deletedPostArr => dispatch(deletePost(deletedPostArr))
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(createPost)
