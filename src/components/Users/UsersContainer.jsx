import { connect } from "react-redux";
import { followAC, unFollowAC, setUsersAC } from "../../redux/usersReducer";

import Users from "./Users";


const f1 = state => {
   return {
      usersData: state.usersP.usersData,
   }
};


const f2 = dispatch => {
   return {
      follow: userId => { dispatch(followAC(userId)) },
      unFollow: userId => { dispatch(unFollowAC(userId)) },
      setUsers: usersData => { dispatch(setUsersAC(usersData)) },
   }
};

const UsersContainer = connect(f1, f2)(Users);

export default UsersContainer;