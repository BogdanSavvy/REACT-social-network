import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { follow, unFollow, setUsers, setTotalCount, setCurrentPage, toggleIsFetching } from "../../redux/usersReducer";

import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

//*Another СlassContainerComponent that makes a AJAX request 
class UsersAJAXContainer extends React.Component {

   componentDidMount () {
      this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}`).then(response => {
         this.props.toggleIsFetching(false)
         this.props.setUsers(response.data.items);
         this.props.setTotalCount(response.data.totalCount);
      });
   };

   onPageChaged = pageNum => {
      this.props.setCurrentPage(pageNum);
      this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.count}`).then(response => {
         this.props.setUsers(response.data.items);
         this.props.toggleIsFetching(false)
      });
   };

   render () {
      return (
         <>
            {this.props.isFetching ?
               <Preloader /> : <Users usersData={this.props.usersData}
                                    totalCount={this.props.totalCount}
                                    count={this.props.count}
                                    currentPage={this.props.currentPage}
                                    follow={this.props.follow}
                                    unFollow={this.props.unFollow}
                                    onPageChaged={this.onPageChaged} />}
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
   }
};


const UsersContainer = connect( MSTP, {follow, unFollow, setUsers, setTotalCount, setCurrentPage, toggleIsFetching} )(UsersAJAXContainer);

export default UsersContainer;