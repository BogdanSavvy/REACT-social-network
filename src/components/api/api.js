import axios from "axios";


const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: {
      "API-KEY": '4e3604ed-fad8-4895-ada3-69451f0f9395'
   }
});

export const getAuth = () => {
   return instance.get('auth/me').then(response => response.data);
};

export const getProfile = (profId) => {
   return instance.get(`profile/${profId}`).then(response => response.data);
};

export const getUsers = (currentPage, count) => {
   return instance.get(`users?page=${currentPage}&count=${count}`).then(response => response.data);
};

export const setFollow = (id) => {
   return instance.post(`follow/${id}`).then(response => response.data);
};

export const setUnfollow = (id) => {
   return instance.delete(`follow/${id}`).then(response => response.data);
};
