import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { followAC, unFollowAC, setUsersAC, setTotalCountAC, setCurrentPageAC } from "../../redux/usersReducer";

import Users from './Users';

//*Another Сlass-ContainerComponent that makes a request to the server 
class UsersAJAXContainer extends React.Component {

   componentDidMount () {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}`).then( response => {
         this.props.setUsers(response.data.items);
         this.props.setTotalCount(response.data.totalCount);
      });
   };
   
   onPageChaged = pageNum => {
      this.props.setCurrentPage(pageNum);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.count}`).then( response => this.props.setUsers(response.data.items));
   };

   render ()  {
      return  <Users usersData={this.props.usersData} 
                     totalCount={this.props.totalCount}
                     count={this.props.count} 
                     currentPage={this.props.currentPage} 
                     follow={this.props.follow} 
                     unFollow={this.props.unFollow} 
                     onPageChaged={this.onPageChaged} />
   };
}

//* MSTP => MapStateToProps
const MSTP = state => {
   return {
      usersData: state.usersP.usersData,
      count: state.usersP.count,
      totalCount: state.usersP.totalCount,
      currentPage: state.usersP.currentPage,
   }
};

//* MDTP => MapDispatchToProps
const MDTP = dispatch => {
   return {
      follow: userId => { dispatch(followAC(userId)) },
      unFollow: userId => { dispatch(unFollowAC(userId)) },
      setUsers: usersData => { dispatch(setUsersAC(usersData)) },
      setTotalCount: totalCount => { dispatch(setTotalCountAC(totalCount)) },
      setCurrentPage: pageNum => { dispatch(setCurrentPageAC(pageNum)) },
   }
};

const UsersContainer = connect(MSTP, MDTP)(UsersAJAXContainer);

export default UsersContainer;