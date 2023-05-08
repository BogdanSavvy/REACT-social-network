import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { authUser } from '../../redux/authReducer';

import Header from './Header';


class HeaderContainer extends React.Component {

   componentDidMount(){
      axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { 
         withCredentials: true, 
      }).then(response => {
         if(response.data.resultCode === 0){
            let { email, id, login} = response.data.data;
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

