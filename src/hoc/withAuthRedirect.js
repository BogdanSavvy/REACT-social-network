import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


let mapStateToPropsAuthData = state => ({
   isAuth: state.auth.isAuth,
}) 

export const withAuthRedirect = Component => {

   let RedirectComponent = props => {
      if (!props.isAuth) return <Navigate to='/login' />;
      return <Component {...props} />;
   };

   return connect(mapStateToPropsAuthData)(RedirectComponent);
}