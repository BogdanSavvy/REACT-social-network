import style from './Users.module.scss';

import Member from './Member/Member';


const Users = (props) => {

   let members = props.usersData.map(el => <Member key={el.id} id={el.id} bgImg={el.bgImg} ava={el.ava} name={el.name} status={el.status} followed={el.followed} follow={props.follow} unFollow={props.unFollow} />);

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