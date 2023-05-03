//? Action variables
const follow = 'FOLLOW';
const unFollow = 'UN-FOLLOW';
const setUsers = 'SET-USERS';
const setTotalCount = 'SET-TOTAL-USERS-COUNT';
const setCurrentPage = 'SET-CURRENT-PAGE';

let initalState = {
   usersData: [],
   currentPage: 1,
   totalCount: null,
   count: 20,
};

const usersReducer = (state = initalState, action) => {
   switch (action.type) {
      case follow : 
         return {
            ...state,
            usersData: state.usersData.map( user => {
               if (user.id === action.userId) {
                  return {...user, followed: true}
               } 
               return user;
            })
         };
      case unFollow : 
         return {
            ...state,
            usersData: state.usersData.map( user => {
               if (user.id === action.userId) {
                  return {...user, followed: false}
               } 
               return user;
            })
         };
      case setUsers :
         return {
            ...state,
            usersData: action.usersData,
         };
      case setTotalCount :
         return {
            ...state,
            totalCount: action.totalCount,
         };
      case setCurrentPage :
         return {
            ...state,
            currentPage: action.currentPage,
         };
      default: return state;
   }
};

//*abbreviation "AC" => "ActionCreator"
export const followAC = userId => ({ type: follow, userId });
export const unFollowAC = userId => ({ type: unFollow, userId });
export const setUsersAC = usersData => ({ type: setUsers, usersData });
export const setTotalCountAC = totalCount => ({ type: setTotalCount, totalCount });
export const setCurrentPageAC = currentPage => ({ type: setCurrentPage, currentPage });

export default usersReducer;