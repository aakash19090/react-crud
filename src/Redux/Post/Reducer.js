import { CREATE_NEWPOST, HANDLE_TITLE, HANDLE_DESCR, HANDLE_TITLE_UPDATE, HANDLE_DESCR_UPDATE, EDIT_POST, UPDATE_POST, CANCEL_UPDATE, DELETE_POST } from './Types';

const initialState = {
    newPostTitle : '',
    newPostDescr : '',
    posts : [],
    isEdit : false,
    activeEditPost : {},
    activeEditPostIndex : null,
    updateTitle : '',
    updateDescr : ''
}

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_NEWPOST : return{
            ...state,
            isEdit : false,
            posts : action.payload
        }
        case HANDLE_TITLE : return{
            ...state,
            newPostTitle : action.payload
        }
        case HANDLE_DESCR : return{
            ...state,
            newPostDescr : action.payload
        }
        case EDIT_POST : return{
            ...state,
            isEdit : true,
            activeEditPost : action.editedPost,
            activeEditPostIndex : action.editedIndexAt,
            updateTitle : action.editedTitle,
            updateDescr : action.editedDescr
        }
        case HANDLE_TITLE_UPDATE : return{
            ...state,
            updateTitle : action.payload
        }
        case HANDLE_DESCR_UPDATE : return{
            ...state,
            updateDescr : action.payload
        }
        case UPDATE_POST : return{
            ...state,
            isEdit : false,
            posts : action.payload
        }
        case CANCEL_UPDATE : return{
            ...state,
            isEdit : false
        }
        case DELETE_POST : return{
            ...state,
            posts : action.payload
        }
        default: return state
    }
}

export default postReducer