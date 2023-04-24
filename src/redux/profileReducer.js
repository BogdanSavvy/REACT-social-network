const addPost = 'ADD-POST';
const upPostTxt = 'UPDATE-POST-TEXT';


const profileReducer = (state, action) => {
   switch (action.type) {
      case addPost :
         let newPost = {
            id: 7,
            ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg',
            name: 'Amogus Amongasovich',
            message: state.newPostTxt,
            time: 'now',
         };
         state.postsData.unshift(newPost);
         return state;
      case upPostTxt :
         state.newPostTxt = action.newTxt;
         return state;
      default: return state;
   };
};

//*abbreviation "AC" => "ActionCreator"
export const addPostAC = () => ({ type: addPost });
export const updatePostTxtAC = txt => ({ type: upPostTxt, newTxt: txt });

export default profileReducer;