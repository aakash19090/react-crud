import React, { Component } from 'react'
import shortid from "shortid";

class AllPosts extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            postId : null,
            updatedTitle : '',
            updatedDescr : ''
        }
    }

    handleEdit = e => {
        let item_id = e.target.getAttribute("data-id");
        this.props.editPost(item_id);
    }   

    handleDelete = e => {
        let item_id = e.target.getAttribute("data-id");
        this.props.deletePost(item_id);
    }

    render() {

        return (
            <div className='all_posts'>
                <div className='header p-2'>
                    <div className='container'>
                        <h2 className='text-center'>All Posts</h2>
                    </div>
                </div>

                <div className='post_details m-5'>
                    <div className='container' >

                        <div className='row'>

                            {
                                this.props.posts.map( item => {
                                    return(
                                        <div key={item.id} id={item.id} className='col-xs-12 col-sm-6 col-md-4'>
                                            <div className='inner mb-4 p-2'>
                                                <h4 className="title text-left mb-3"> {item.title} </h4>
                                                <p className="descr text-justify mb-3" > {item.description} </p>

                                                <div className="btn_div d-flex">
                                                    <button type="button" className='btn btn-warning mr-2 w-50' data-id={item.id} onClick={ e => this.handleEdit(e) } >Edit</button>
                                                    <button type="button" className='btn btn-danger button-outline w-50' data-id={item.id} onClick={ e => this.handleDelete(e) } >Delete</button>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default AllPosts
