export const reducer = (state, action) => {
    switch(action.type){
        case "GET_STORIES":
            return{
                ...state,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
                // isLoading: action.payload.isLoading,
                // page: action.payload.page
            }
        case "SET_LOADING":
            return{
                ...state,
                isLoading: action.payload.isLoading
            }
        case "SET_QUERY":
            return{
                ...state,
                query: action.payload.query
            }
        case "REMOVE_NEWS":
            return{
                ...state,
                hits: action.payload 
            }
        case "CHANGE_PAGE":
            return{
                ...state,
                page: action.payload.page
            }
        default:
            return state
    }
}