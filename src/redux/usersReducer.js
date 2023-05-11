import { usersApi } from '../api/api';

//? Action variables
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOW_PROGRESS = 'TOGGLE-FOLLOW-PROGRESS';

let initalState = {
   usersData: [],
   currentPage: 1,
   totalCount: null,
   count: 20,
   isFetching: false,
   followProgress: [],
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
      case TOGGLE_FOLLOW_PROGRESS :
         return {
            ...state,
            followProgress: action.boolean 
               ? [...state.followProgress, action.userId] 
               : state.followProgress.filter(id => id !== action.userId)
         };
      default: return state;
   }
};

//*_____"Action Creators"_____
export const confirmFollow = userId => ({ type: FOLLOW, userId });
export const confirmUnfollow = userId => ({ type: UNFOLLOW, userId });
export const setUsers = usersData => ({ type: SET_USERS, usersData });
export const setTotalCount = totalCount => ({ type: SET_TOTAL_COUNT, totalCount });
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });
export const toggleIsFetching = boolean => ({ type: TOGGLE_IS_FETCHING, isFetching: boolean });
export const toggleFollowProgress = (boolean, userId) => ({ type: TOGGLE_FOLLOW_PROGRESS, boolean, userId });


export const getUsers = (currentPage,count) => (dispatch) => {
   dispatch(toggleIsFetching(true));
      usersApi.getUsers(currentPage, count).then(data => {
         dispatch(toggleIsFetching(false));
         dispatch(setUsers(data.items));
         dispatch(setTotalCount(data.totalCount));
      });
};

export const follow = (userId) => (dispatch) => {
   dispatch(toggleFollowProgress(true, userId));
   usersApi.setFollow(userId).then(data => {
      if (data.resultCode === 0) {
         dispatch(confirmFollow(userId));
      };
      dispatch(toggleFollowProgress(false, userId));
   });
};

export const unfollow = (userId) => (dispatch) => {
   dispatch(toggleFollowProgress(true, userId));
   usersApi.setUnfollow(userId).then(data => {
      if (data.resultCode === 0) {
         dispatch(confirmUnfollow(userId));
      };
      dispatch(toggleFollowProgress(false, userId));
   });
};

export default usersReducer;