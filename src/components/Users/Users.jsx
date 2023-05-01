import style from './Users.module.scss';

import axios from 'axios';

import Member from './Member/Member';


const Users = (props) => {

   if (props.usersData.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => props.setUsers(response.data.items));
   }
   
   let members = props.usersData.map (el => 
      <Member key={el.id} id={el.id} bgImg={el.photos.large} ava={el.photos.small} name={el.name} status={el.status} followed={el.followed} follow={props.follow} unFollow={props.unFollow} />
   );

   return (
      <div className={`${style.page}`}>
         <div className={`${style.page__container}`}>
            <h2 className={`${style.page__title}`}>Users</h2>
            <div className={`${style.page__users} ${style.users}`}>
               {members}
            </div>
         </div>
      </div>
   )
}

export default Users;