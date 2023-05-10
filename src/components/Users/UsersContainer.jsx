import React from 'react';
import { connect } from "react-redux";
import { follow, unFollow, setUsers, setTotalCount, setCurrentPage, toggleIsFetching, toggleFollowProgress } from "../../redux/usersReducer";
import { getUsers } from '../api/api';

import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

//*Another СlassContainerComponent that makes a AJAX request 
class UsersAJAXContainer extends React.Component {

   componentDidMount () {
      this.props.toggleIsFetching(true);
      getUsers(this.props.currentPage, this.props.count).then(data => {
         this.props.toggleIsFetching(false);
         this.props.setUsers(data.items);
         this.props.setTotalCount(data.totalCount);
      });
   };

   onPageChaged = pageNum => {
      this.props.setCurrentPage(pageNum);
      this.props.toggleIsFetching(true);
      getUsers(pageNum, this.props.count).then(data => {
         this.props.setUsers(data.items);
         this.props.toggleIsFetching(false);
      });
   };

   render () {
      return (
         <>
            {this.props.isFetching ?
               <Preloader /> : <Users {...this.props} onPageChaged={this.onPageChaged} />}
         </>
      )
   };
};

//* MSTP => MapStateToProps
const MSTP = state => {
   return {
      usersData: state.usersP.usersData,
      count: state.usersP.count,
      totalCount: state.usersP.totalCount,
      currentPage: state.usersP.currentPage,
      isFetching: state.usersP.isFetching,
      followProgress: state.usersP.followProgress,
   }
};


const UsersContainer = connect( MSTP, {follow, unFollow, setUsers, setTotalCount, setCurrentPage, toggleIsFetching, toggleFollowProgress} )(UsersAJAXContainer);

export default UsersContainer;