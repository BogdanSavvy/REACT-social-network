//? Action variables
const SEND_MESSAGE = 'SEND-MESSAGE';

let initalState = {
	branchesData: [
		{
			id: 1,
			name: 'Andre',
			surname: 'Boyarskiy',
			lastSent: 'Чінаааа, ком цу моне',
			visit: 'online',
			avatar: 'https://i1.sndcdn.com/artworks-H0ChiM7OzvRmfGEG-6E4BLQ-t500x500.jpg',
		},
		{
			id: 2,
			name: 'Sanya',
			surname: 'Beliy',
			lastSent: 'Є 50 грн на карті чуваче?',
			visit: 'offline',
			avatar:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnpcyfx8RcGbp0s9tuXQq8uvNwjliC27cQ2ERdWPhkjIklGUvKRL4JC-tD_FhHgC3T-m4&usqp=CAU',
		},
		{
			id: 3,
			name: 'Kebbabka',
			surname: 'Vinnitskaya',
			lastSent: 'Дай хлорки курвааа!!',
			visit: 'online',
			avatar: 'https://proza.ru/pics/2017/06/23/1559.jpg',
		},
		{
			id: 4,
			name: 'Hagi',
			surname: 'Vagi',
			lastSent: 'Та ти кардан!',
			visit: 'offline',
			avatar:
				'https://www.kids-joy.com.ua/image/cache/catalog/poppy-playtime/hagi-vagi/hagivagchernyj-650x650.jpg',
		},
		{
			id: 5,
			name: 'User',
			surname: 'Test',
			lastSent: 'Test message',
			visit: 'offline',
			avatar:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU',
		},
		{
			id: 6,
			name: 'User',
			surname: 'Test',
			lastSent: 'Test message',
			visit: 'offline',
			avatar:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU',
		},
		{
			id: 7,
			name: 'User',
			surname: 'Test',
			lastSent: 'Test message',
			visit: 'offline',
			avatar:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU',
		},
		{
			id: 8,
			name: 'User',
			surname: 'Test',
			lastSent: 'Test message',
			visit: 'offline',
			avatar:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU',
		},
		{
			id: 9,
			name: 'User',
			surname: 'Test',
			lastSent: 'Test message',
			visit: 'offline',
			avatar:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU',
		},
		{
			id: 10,
			name: 'User',
			surname: 'Test',
			lastSent: 'Test message',
			visit: 'offline',
			avatar:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU',
		},
		{
			id: 11,
			name: 'User',
			surname: 'Test',
			lastSent: 'Test message',
			visit: 'offline',
			avatar:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU',
		},
		{
			id: 12,
			name: 'User',
			surname: 'Test',
			lastSent: 'Test message',
			visit: 'offline',
			avatar:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU',
		},
		{
			id: 13,
			name: 'User',
			surname: 'Test',
			lastSent: 'Test message',
			visit: 'offline',
			avatar:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU',
		},
		{
			id: 14,
			name: 'User',
			surname: 'Test',
			lastSent: 'Test message',
			visit: 'offline',
			avatar:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU',
		},
	],
	sentMessagesData: [
		{ id: 1, message: 'Hello', sender: 'user' },
		{ id: 2, message: 'how', sender: 'user' },
		{ id: 3, message: 'are you??', sender: 'user' },
		{ id: 4, message: 'test message', sender: 'user' },
		{ id: 5, message: 'test message', sender: 'me' },
		{ id: 6, message: 'test message', sender: 'user' },
	],
};

const messagesReducer = (state = initalState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let newMessage = {
				id: 7,
				message: action.newMessageTxt,
				sender: 'me',
			};
			return {
				//! ==> stateCopy
				...state,
				sentMessagesData: [...state.sentMessagesData, newMessage], //! ===>  stateCopy.sentMessagesData.push(newMessage);
			};
		default:
			return state;
	}
};

//*_____"Action Creators"_____
export const sendMessage = newMessageTxt => ({ type: SEND_MESSAGE, newMessageTxt });

export default messagesReducer;
