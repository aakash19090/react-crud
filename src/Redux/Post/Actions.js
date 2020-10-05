import { CREATE_NEWPOST, HANDLE_TITLE, HANDLE_DESCR, HANDLE_TITLE_UPDATE, HANDLE_DESCR_UPDATE, EDIT_POST, UPDATE_POST, CANCEL_UPDATE, DELETE_POST } from './Types';

export const createNewPost = newPostArr => {
    return{
        type : CREATE_NEWPOST,
        payload : newPostArr
    }
}

export const editPost = (activePost, activeIndex) => {
    return{
        type : EDIT_POST,
        editedPost : activePost,
        editedIndexAt : activeIndex,
        editedTitle : activePost.title,
        editedDescr : activePost.description,
    }
}

export const updatePost = updatedPostArr => {
    return{
        type : UPDATE_POST,
        payload : updatedPostArr
    }
}

export const cancelUpdatePost = () => {
    return{
        type : CANCEL_UPDATE
    }
}

export const deletePost = deletedPostArr => {
    return{
        type : DELETE_POST,
        payload : deletedPostArr
    }
}

export const handleTitle = inputVal => {

    return{
        type : HANDLE_TITLE,
        payload : inputVal
    }
    
}

export const handleDescr = inputVal => {

    return{
        type : HANDLE_DESCR,
        payload : inputVal
    }
    
}

export const handleTitleUpdate = updatedVal => {

    return{
        type : HANDLE_TITLE_UPDATE,
        payload : updatedVal
    }
    
}


export const handleDescrUpdate = updatedVal => {

    return{
        type : HANDLE_DESCR_UPDATE,
        payload : updatedVal
    }
    
}