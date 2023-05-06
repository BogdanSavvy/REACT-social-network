//? Action variables
const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initalState = {
   postsData: [
      { id: 1, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'WTF', time: '25min ago', },
      { id: 2, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'is', time: '2 days ago', },
      { id: 3, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'going on', time: '1 hour ago', },
      { id: 4, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'THIS DESIGN IS TRASH! THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!', time: '22min ago', },
      { id: 5, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'THIS DESIGN IS TRASH!', time: '4min ago', },
      { id: 6, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'THIS DESIGN IS TRASH!', time: '5min ago', },
   ],
   newPostTxt: '',
   profile: null,
};

const profileReducer = (state = initalState, action) => {
   switch (action.type) {
      case ADD_POST : 
         let newPost = {
            id: 7,
            ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg',
            name: 'Amogus Amongasovich',
            message: state.newPostTxt,
            time: 'now',
         };
         return {        //! ==> stateCopy
            ...state,
            postsData: [newPost, ...state.postsData],  //! ===>  stateCopy.postsData.unshift(newPost);
         };
      case UPDATE_POST_TEXT : 
         return {        //! ==> stateCopy
            ...state,
            newPostTxt: action.newTxt,
         };
      case SET_USER_PROFILE : 
         return {        //! ==> stateCopy
            ...state,
            profile: action.profile,
         };
      default: return state;
   };
};

//*_____"Action Creators"_____
export const addPost = () => ({ type: ADD_POST });
export const updatePostTxt = txt => ({ type: UPDATE_POST_TEXT, newTxt: txt });
export const setUserProfile = profData => ({ type: SET_USER_PROFILE, profile: profData, });

export default profileReducer;