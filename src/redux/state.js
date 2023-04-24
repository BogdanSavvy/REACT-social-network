import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";

//imitation of Data

//*abbreviation "P" => "Page";
let store = {

   _state: {
      profileP: {
         adminData: [
            { name: 'Pepe Frog', surname: 'Frog', status: 'It should be status', ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', bgImg: 'https://wallpapers.com/images/featured/fc0xi68rw21ini90.jpg', },
         ],
         postsData: [
            { id: 1, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'WTF', time: '25min ago', },
            { id: 2, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'is', time: '2 days ago', },
            { id: 3, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'going on', time: '1 hour ago', },
            { id: 4, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'THIS DESIGN IS TRASH! THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!', time: '22min ago', },
            { id: 5, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'THIS DESIGN IS TRASH!', time: '4min ago', },
            { id: 6, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'THIS DESIGN IS TRASH!', time: '5min ago', },
         ],
         newPostTxt: '',
      },
      messagesP: {
         branchesData: [
            { id: 1, name: 'Andre', surname: 'Boyarskiy', lastSent: 'Чінаааа, ком цу моне', visit: 'online', avatar: 'https://i1.sndcdn.com/artworks-H0ChiM7OzvRmfGEG-6E4BLQ-t500x500.jpg', },
            { id: 2, name: 'Sanya', surname: 'Beliy', lastSent: 'Є 50 грн на карті чуваче?', visit: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnpcyfx8RcGbp0s9tuXQq8uvNwjliC27cQ2ERdWPhkjIklGUvKRL4JC-tD_FhHgC3T-m4&usqp=CAU', },
            { id: 3, name: 'Kebbabka', surname: 'Vinnitskaya', lastSent: 'Дай хлорки курвааа!!', visit: 'online', avatar: 'https://proza.ru/pics/2017/06/23/1559.jpg', },
            { id: 4, name: 'Hagi', surname: 'Vagi', lastSent: 'Та ти кардан!', visit: 'offline', avatar: 'https://www.kids-joy.com.ua/image/cache/catalog/poppy-playtime/hagi-vagi/hagivagchernyj-650x650.jpg', },
            { id: 5, name: 'User', surname: 'Test', lastSent: 'Test message', visit: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU', },
            { id: 6, name: 'User', surname: 'Test', lastSent: 'Test message', visit: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU', },
            { id: 7, name: 'User', surname: 'Test', lastSent: 'Test message', visit: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU', },
            { id: 8, name: 'User', surname: 'Test', lastSent: 'Test message', visit: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU', },
            { id: 9, name: 'User', surname: 'Test', lastSent: 'Test message', visit: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU', },
            { id: 10, name: 'User', surname: 'Test', lastSent: 'Test message', visit: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU', },
            { id: 11, name: 'User', surname: 'Test', lastSent: 'Test message', visit: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU', },
            { id: 12, name: 'User', surname: 'Test', lastSent: 'Test message', visit: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU', },
            { id: 13, name: 'User', surname: 'Test', lastSent: 'Test message', visit: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU', },
            { id: 14, name: 'User', surname: 'Test', lastSent: 'Test message', visit: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU', },
         ],
         sentMessagesData: [
            { id: 1, message: 'Hello', sender: 'user', },
            { id: 2, message: 'how', sender: 'user', },
            { id: 3, message: 'are you??', sender: 'user', },
            { id: 4, message: 'test message', sender: 'user', },
            { id: 5, message: 'test message', sender: 'me', },
            { id: 6, message: 'test message', sender: 'user', },
         ],
         newMessageTxt: '',
      },
   },
   _callSub () {
      //plug
   },
   subscribe (observer) {
      this._callSub = observer;
   },
   getState () {
      return this._state;
   },
   dispatch (action) {

      this._state.profileP = profileReducer(this._state.profileP, action);
      this._state.messagesP = messagesReducer(this._state.messagesP, action);

      this._callSub(this._state);

   },
}

export default store;
