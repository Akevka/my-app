import React from "react";
import s from "./users.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";
import Paginator from "../common/Paginator/Paginator";


let User = ({user,followingInProgress, follow, unfollow}) => {

    return <div>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                <img
                                    src={user.photos.small != null ? user.photos.small : "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg"}
                                    className={s.userPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                {user.followed ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

                                    unfollow(user.id);

                                }}>Unfollow</button>
                                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

                                        follow(user.id);

                                    }}>Follow</button>}

                            </div>
                        </span>
                    <span>
                          <span>
                              <div>{user.name}</div>
                              <div>{user.status}</div>
                          </span>
                          <span>
                              <div>{"user.location.country"}</div>
                              <div>{"user.location.city"}</div>
                              <div></div>
                          </span>
                        </span>
                </div>
            }




export default User;