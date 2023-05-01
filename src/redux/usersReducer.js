//? Action variables
const follow = 'FOLLOW';
const unFollow = 'UN-FOLLOW';
const setUsers = 'SET-USERS';

let initalState = {
   usersData: [],
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
      default: return state;
   }
};

//*abbreviation "AC" => "ActionCreator"
export const followAC = userId => ({ type: follow, userId });
export const unFollowAC = userId => ({ type: unFollow, userId });
export const setUsersAC = usersData => ({ type: setUsers, usersData });

export default usersReducer;