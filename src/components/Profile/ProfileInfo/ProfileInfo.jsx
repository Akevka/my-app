import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";


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
            Ava + description
        </div>

    </div>
}

export default ProfileInfo;