import React, { Component } from 'react'
import shortid from "shortid";
import AllPosts from '../AllPost';

class createPost extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            newPostTitle : '',
            newPostDescr : '',
            posts : [],
            isEdit : false,
            activeEditPost : {},
            activeEditPostIndex : null,
            updateTitle : '',
            updateDescr : ''

        }
    }

    // Inputs for New Post
    handleInputs = e => {
        e.target.name === 'postTitle'
        ?
        this.setState({
            newPostTitle : e.target.value
        })
        :
        this.setState({
            newPostDescr : e.target.value
        })
    }

    // Inputs for Updating Post
    handleUpdateInputs = e => {
        e.target.name === 'postTitle'
        ?
        this.setState({
            updateTitle : e.target.value
        })
        :
        this.setState({
            updateDescr : e.target.value
        })
    }

    createPostBtn = () => {
        let u_id = shortid.generate();
        let currPosts = this.state.posts;
        let postItem = {
            id : u_id,
            title : this.state.newPostTitle,
            description : this.state.newPostDescr
        }

        currPosts.push(postItem);

        this.setState({
            posts : currPosts
        })

    }

    // Handle Post Edit Button
    postEdit = id => {
        
        let postDuplicate = [...this.state.posts];

        let editPostindex = postDuplicate.findIndex( post => {
            if(post.id === id){
                return post
            }
        })

        let activePost =  postDuplicate[editPostindex];
        
        this.setState({
            isEdit : true,
            activeEditPost : activePost,
            activeEditPostIndex : editPostindex,
            updateTitle : activePost.title,
            updateDescr : activePost.description
        })
    
    }

    // Handle Post Update Button
    handleUpdateBtn = () => {
        let postDuplicate = [...this.state.posts];
        let activeIndex = this.state.activeEditPostIndex;

        let updatedItem = {
            id : this.state.activeEditPost.id,
            title : this.state.updateTitle,
            description : this.state.updateDescr
        }

        postDuplicate[activeIndex] = updatedItem

        this.setState({
            posts : postDuplicate,
            isEdit : false
        })
    }


    // Handle Cancel Button
    handlecancelBtn = () => {
        this.setState({
            isEdit : false
        })
    }


    // Handle Delete Button 

    postDelete = id => {
        if(window.confirm("Are you sure to delete this Post ?")){

            let postDuplicate = [...this.state.posts];

            let editPostindex = postDuplicate.findIndex( post => {
                if(post.id === id){
                    return post
                }
            })
            postDuplicate.splice(editPostindex, 1);
            // console.log(postDuplicate);
            this.setState({
                posts : postDuplicate
            })
        } 

    }


    render() {

        const isEditing = this.state.isEdit

        // console.log(this.state)
        return (
            <>
                <div className='create_post'>
                    <div className='header p-2'>
                        <div className='container'>
                            <h2 className='text-center'>Create/Update Post</h2>
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
                                                <input type="text" className='form-control' name='postTitle' onChange={ e => this.handleUpdateInputs(e)} value={this.state.updateTitle} />
                                            ):(
                                                <input type="text" className='form-control' name='postTitle' onChange={ e => this.handleInputs(e)} value={this.state.newPostTitle} />
                                            )
                                        }
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="postDescr">Post Description</label>
                                        {
                                            isEditing ? (
                                                <textarea className="form-control" name='postDescr' onChange={ e => this.handleUpdateInputs(e)} value={this.state.updateDescr} rows="5"/>
                                            ):(
                                                <textarea className="form-control" name='postDescr' onChange={ e => this.handleInputs(e)} value={this.state.newPostDescr} rows="5"/>
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
                                            <button className='btn btn-danger w-25' onClick={this.handlecancelBtn}>Cancel</button>
                                        </>
                                        ):(
                                        <button className='btn btn-success' onClick={this.createPostBtn}>Create Post</button>
                                            
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <AllPosts posts={this.state.posts} editPost={this.postEdit} deletePost={this.postDelete} />
            </>
        )
    }
}

export default createPost
