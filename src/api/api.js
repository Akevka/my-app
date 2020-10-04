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
        return profileAPI.getProfile(userId);
    }
}


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
    savePhoto (photoFile) {
        const formData = new FormData();
        formData.append("image",photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile);
    }
    

}



    export const authAPI = {
        me (){
    return instance.get(`auth/me`);
        },

        login (email, password, rememberMe=false, captcha = null ){
    return instance.post(`auth/login`, { email, password, rememberMe, captcha });
        },
        logout (){
    return instance.delete(`auth/login`);
        },
    }

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }

}