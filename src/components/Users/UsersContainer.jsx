import React from 'react';
import { connect } from "react-redux";
import { follow, unfollow, getUsers } from "../../redux/usersReducer";

import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

//*Another СlassContainerComponent that makes a AJAX request 
class UsersContainer extends React.Component {

   componentDidMount () {
      this.props.getUsers(this.props.currentPage, this.props.count)
   };

   onPageChaged = pageNum => {
      this.props.getUsers(pageNum, this.props.count)
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


export default connect( MSTP, {follow, unfollow, getUsers} )(UsersContainer);