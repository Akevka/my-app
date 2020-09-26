import React from "react";
import s from "./users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage,totalUsersCount, pageSize, onPageChanged,users, ...props}) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.usersProfile}>
            <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount} pageSize={pageSize} />
            {
                users.map(u => <User user={u}
                                     key={u.id}
                                     followingInProgress={props.followingInProgress}
                                     follow={props.follow}
                                     unfollow={props.unfollow}/>



               )
            }
            </div>
        </div>
    )
}

export default Users;