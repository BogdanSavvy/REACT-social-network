import { NavLink } from 'react-router-dom';
import style from '../Messages.module.scss';


// immitation of Data to Dialogs
let branchesData = [
   { id:1, name: 'Andre', surname: 'Boyarskiy', lastSent: 'Чінаааа, ком цу моне', visit: 'online', avatar: 'https://i1.sndcdn.com/artworks-H0ChiM7OzvRmfGEG-6E4BLQ-t500x500.jpg', },
   { id:2, name: 'Sanya', surname: 'Beliy', lastSent: 'Є 50 грн на карті чуваче?', visit: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnpcyfx8RcGbp0s9tuXQq8uvNwjliC27cQ2ERdWPhkjIklGUvKRL4JC-tD_FhHgC3T-m4&usqp=CAU', },
   { id:3, name: 'Kebbabka', surname: 'Vinnitskaya', lastSent: 'Дай хлорки курвааа!!', visit: 'online', avatar: 'https://proza.ru/pics/2017/06/23/1559.jpg', },
   { id:4, name: 'Hagi', surname: 'Vagi', lastSent: 'Та ти кардан!', visit: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU', },
   { id:5, name: 'User', surname: 'Test', lastSent: 'Test message', visit: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU', },
   { id:6, name: 'User', surname: 'Test', lastSent: 'Test message', visit: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU', },
   { id:7, name: 'User', surname: 'Test', lastSent: 'Test message', visit: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU', },
   { id:8, name: 'User', surname: 'Test', lastSent: 'Test message', visit: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU', },
   { id:9, name: 'User', surname: 'Test', lastSent: 'Test message', visit: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU', },
   { id:10, name: 'User', surname: 'Test', lastSent: 'Test message', visit: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU', },
   { id:11, name: 'User', surname: 'Test', lastSent: 'Test message', visit: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU', },
   { id:12, name: 'User', surname: 'Test', lastSent: 'Test message', visit: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU', },
   { id:13, name: 'User', surname: 'Test', lastSent: 'Test message', visit: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU', },
   { id:14, name: 'User', surname: 'Test', lastSent: 'Test message', visit: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU', },

];
//_______________________________________________________________________________________
//* default User Avatar
//* "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU"

const Branch = (props) => {
   return (
      <div className={`${style.dialogsList__branch}`}>
         <div className={`${style.dialogsList__branchWho}`}>
            <div className={`${style.dialogsList__userAvatar}`}>
               <img src={`${props.avatar}`} alt="user_ava" />
            </div>
            <div className={`${style.dialogsList__userName}`}>
               <NavLink to={`/messages/${props.id}`}>{props.name} {props.surname}</NavLink>
            </div>
            <div className={`${style.dialogsList__lastVisit} ${style[props.visit]}`}>{props.visit}</div>
         </div>
         <div className={`${style.dialogsList__lastMessage}`}><span>Last message: </span> {props.lastSent}</div>
      </div>
   )
};


const DialogList = (props) => {
   let newBranch = branchesData.map(el => <Branch id={el.id} name={el.name} surname={el.surname} lastSent={el.lastSent} visit={el.visit} avatar={el.avatar} />)

   return (
      <div className={`${style.page__dialogsList} ${style.dialogsList}`}>
         {newBranch}
      </div>
   )
}

export default DialogList;