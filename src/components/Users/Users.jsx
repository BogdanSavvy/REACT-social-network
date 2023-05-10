import style from './Users.module.scss';

import Member from './Member/Member';


const Users = props => {

   //?____Filling the page with user profiles_____
   let members = props.usersData.map(el => 
   <Member key={el.id} id={el.id} bgImg={el.photos.large} ava={el.photos.small} name={el.name}
      status={el.status} followed={el.followed} follow={props.follow} unFollow={props.unFollow} 
      toggleFollowProgress={props.toggleFollowProgress} followProgress={props.followProgress} />);

   //?____Counting the number of pages to display users______
   let pageNumbers = [];
   let pagesCount = Math.ceil(props.totalCount / props.count);
   for (let i = 1; i <= pagesCount; i++) {
      pageNumbers.push(i);
   };
   //?____Displaying page numbering______
   let numbering = pageNumbers.map(p => p <= 25 && <span key={p} onClick={() => { props.onPageChaged(p) }} className={p === props.currentPage ? `${style.pages__selected}` : null}>{p}</span>);

   return (
      <div className={`${style.page}`}>
         <div className={`${style.page__container}`}>
            <h2 className={`${style.page__title}`}>Users</h2>
            <div className={`${style.page__users} ${style.users}`}>
               { members }
            </div>
            <div className={`${style.page__pages} ${style.pages}`}>
               { numbering }
            </div>
         </div>
      </div>
   )
}

export default Users;