//? Action variables
const addPost = 'ADD-POST';
const upPostTxt = 'UPDATE-POST-TEXT';

let initalState = {
   adminData: [
      { name: 'Pepe Frog', surname: 'Frog', status: 'It should be status', ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', bgImg: 'https://wallpapers.com/images/featured/fc0xi68rw21ini90.jpg', },
   ],
   postsData: [
      { id: 1, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'WTF', time: '25min ago', },
      { id: 2, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'is', time: '2 days ago', },
      { id: 3, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'going on', time: '1 hour ago', },
      { id: 4, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'THIS DESIGN IS TRASH! THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!', time: '22min ago', },
      { id: 5, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'THIS DESIGN IS TRASH!', time: '4min ago', },
      { id: 6, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'THIS DESIGN IS TRASH!', time: '5min ago', },
   ],
   newPostTxt: '',
};

const profileReducer = (state = initalState, action) => {
   switch (action.type) {
      case addPost : {
         let newPost = {
            id: 7,
            ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg',
            name: 'Amogus Amongasovich',
            message: state.newPostTxt,
            time: 'now',
         };
         let stateCopy = {...state};
         stateCopy.postsData = [...state.postsData];
         stateCopy.postsData.unshift(newPost);
         return stateCopy;
      };
      case upPostTxt : {
         let stateCopy = {...state};
         stateCopy.newPostTxt = action.newTxt;
         return stateCopy;
      };
      default: return state;
   };
};

//*abbreviation "AC" => "ActionCreator"
export const addPostAC = () => ({ type: addPost });
export const updatePostTxtAC = txt => ({ type: upPostTxt, newTxt: txt });

export default profileReducer;