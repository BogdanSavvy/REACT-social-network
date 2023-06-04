import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '4e3604ed-fad8-4895-ada3-69451f0f9395',
	},
});

export const usersApi = {
	getUsers(currentPage, count) {
		return instance
			.get(`users?page=${currentPage}&count=${count}`)
			.then(response => response.data);
	},

	setFollow(id) {
		return instance.post(`follow/${id}`).then(response => response.data);
	},

	setUnfollow(id) {
		return instance.delete(`follow/${id}`).then(response => response.data);
	},
};

export const authApi = {
	me() {
		return instance.get('auth/me').then(response => response.data);
	},

	//*rememberMe = false (default value for this property)
	login(email, password, rememberMe = false) {
		return instance
			.post('auth/login', { email, password, rememberMe })
			.then(response => response.data);
	},

	logout() {
		return instance.delete('auth/login').then(response => response.data);
	},
};

export const profileApi = {
	getProfile(profId) {
		return instance.get(`profile/${profId}`).then(response => response.data);
	},

	getStatus(profId) {
		return instance.get(`profile/status/${profId}`).then(response => response.data);
	},

	updateStatus(status) {
		return instance.put(`profile/status`, { status }).then(response => response.data);
	},
};
