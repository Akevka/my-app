import * as axios from "axios";
import {unfollow,follow} from "../Redux/users-reducer";





const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "3175d852-46fe-410e-9a70-8b255ae29dc8"
    }
});
export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    follow(userId) {
     return   instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
      return  instance.delete(`follow/${userId}`)
    },

    getProfile(userId) {
        return instance.get(`profile/` + userId);
    }
}
    export const authAPI = {
        me (){
    return instance.get(`auth/me`)
        }

    }