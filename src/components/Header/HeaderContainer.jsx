import React from 'react';
import { connect } from 'react-redux';
import { authUser } from '../../redux/authReducer';

import Header from './Header';
import { getAuth } from '../api/api';


class HeaderContainer extends React.Component {

   componentDidMount(){
      getAuth().then(data => {
         if(data.resultCode === 0){
            let { email, id, login} = data.data;
            this.props.authUser(email, id, login);
         }
      })
   }

   render() {
      return <Header {...this.props} />
   }
}

const MTSP = (state) => {
   return {
      email: state.auth.email,
      userId: state.auth.userId,
      login: state.auth.login,
      isAuth: state.auth.isAuth,
   }
}


export default connect(MTSP, { authUser })(HeaderContainer);

