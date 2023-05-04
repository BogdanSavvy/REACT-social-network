//? Action variables
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initalState = {
   usersData: [],
   currentPage: 1,
   totalCount: null,
   count: 20,
   isFetching: false,
};

const usersReducer = (state = initalState, action) => {
   switch (action.type) {
      case FOLLOW : 
         return {
            ...state,
            usersData: state.usersData.map( user => {
               if (user.id === action.userId) {
                  return {...user, followed: true}
               } 
               return user;
            })
         };
      case UNFOLLOW : 
         return {
            ...state,
            usersData: state.usersData.map( user => {
               if (user.id === action.userId) {
                  return {...user, followed: false}
               } 
               return user;
            })
         };
      case SET_USERS :
         return {
            ...state,
            usersData: action.usersData,
         };
      case SET_TOTAL_COUNT :
         return {
            ...state,
            totalCount: action.totalCount,
         };
      case SET_CURRENT_PAGE :
         return {
            ...state,
            currentPage: action.currentPage,
         };
      case TOGGLE_IS_FETCHING :
         return {
            ...state,
            isFetching: action.isFetching,
         };
      default: return state;
   }
};

//*_____"Action Creators"_____
export const follow = userId => ({ type: FOLLOW, userId });
export const unFollow = userId => ({ type: UNFOLLOW, userId });
export const setUsers = usersData => ({ type: SET_USERS, usersData });
export const setTotalCount = totalCount => ({ type: SET_TOTAL_COUNT, totalCount });
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });
export const toggleIsFetching = boolean => ({ type: TOGGLE_IS_FETCHING, isFetching: boolean });

export default usersReducer;