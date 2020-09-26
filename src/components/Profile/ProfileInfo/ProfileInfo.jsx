import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return <div className={s.content}>

        {/*<div>*/}
        {/*    <img src='http://www.radionetplus.ru/uploads/posts/2013-05/1369460629_panda-1.jpeg'/>*/}
        {/*</div>*/}
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>

    </div>
}

export default ProfileInfo;