//? Action variables
const follow = 'FOLLOW';
const unFollow = 'UN-FOLLOW';
const setUsers = 'SET-USERS';

let initalState = {
   usersData: [
      { id: 1, ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlg7X0xybsEWAwSq4YtZIevJMdKUCBDQT_g&usqp=CAU', bgImg: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', name: 'Pepa Pig', status: 'WTF', followed: true, },
      { id: 2, ava: 'https://создание-сайта.net/images/newsnew/newsnew/check-js-perem.jpg', bgImg: 'https://static.vecteezy.com/system/resources/thumbnails/007/188/566/small_2x/abstract-colorful-motion-fluid-wave-background-free-vector.jpg', name: 'JA SCRIPT', status: 'ya karta', followed: false, },
      { id: 3, ava: 'https://static1.squarespace.com/static/5534a426e4b0ed810ce8f891/t/5fb988b23a91a317f36a2c0a/1606179220566/Header.jpg?format=1500w', bgImg: 'https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp', name: 'Mikola', status: 'going on', followed: false, },
      { id: 4, ava: 'https://pbs.twimg.com/profile_images/3666829261/a7d6882ab293c03b8ffc5a543906c36e_400x400.jpeg', bgImg: 'https://st.focusedcollection.com/9163412/i/1800/focused_221304978-stock-photo-funny-monkey-sitting-jungle-tree.jpg', name: 'BIBIZYAN', status: '!', followed: true, },
      { id: 5, ava: 'https://avatars.akamai.steamstatic.com/0e3efc617badffcf1297efef3a3911180fca13ff_full.jpg', bgImg: 'https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg?t=1682113362', name: 'Killer ultraOMG25000Pro_max', status: 'ya Krip', followed: true, },
      { id: 6, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', bgImg: 'https://static.vecteezy.com/system/resources/thumbnails/007/188/566/small_2x/abstract-colorful-motion-fluid-wave-background-free-vector.jpg', name: 'noName', status: 'user__status', followed: false, },
      { id: 7, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', bgImg: 'https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp', name: 'noName', status: 'user__status', followed: true, },
      { id: 8, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', bgImg: 'https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp', name: 'noName', status: 'user__status', followed: false, },
      { id: 9, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', bgImg: 'https://static.vecteezy.com/system/resources/thumbnails/007/188/566/small_2x/abstract-colorful-motion-fluid-wave-background-free-vector.jpg', name: 'noName', status: 'user__status', followed: true, },
      { id: 10, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', bgImg: 'https://static.vecteezy.com/system/resources/thumbnails/007/188/566/small_2x/abstract-colorful-motion-fluid-wave-background-free-vector.jpg', name: 'noName', status: 'user__status', followed: true, },
      { id: 11, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', bgImg: 'https://static.vecteezy.com/system/resources/thumbnails/007/188/566/small_2x/abstract-colorful-motion-fluid-wave-background-free-vector.jpg', name: 'noName', status: '', followed: false, },
      { id: 12, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', bgImg: 'https://static.vecteezy.com/system/resources/thumbnails/007/188/566/small_2x/abstract-colorful-motion-fluid-wave-background-free-vector.jpg', name: 'noName', status: 'user__status', followed: true, },
   ],
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
      // case setUsers :
      //    return {
      //       ...state,
      //       usersData: action.usersData,
      //    };
      default: return state;
   }
};

//*abbreviation "AC" => "ActionCreator"
export const followAC = userId => ({ type: follow, userId });
export const unFollowAC = userId => ({ type: unFollow, userId });
export const setUsersAC = usersData => ({ type: setUsers, usersData });

export default usersReducer;