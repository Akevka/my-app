import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return <div className={s.content}>

        {/*<div>*/}
        {/*    <img src='http://www.radionetplus.ru/uploads/posts/2013-05/1369460629_panda-1.jpeg'/>*/}
        {/*</div>*/}
        <div className={s.descriptionBlock}>
            <img
                src={props.profile.photos.large || "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg"}/>
            {props.isOwner && <input  className={s.file} type="file" onChange={onMainPhotoSelected}/>}
                <div className={s.editAva}>{props.isOwner && <button  className="btn btn-primary">Change avatar</button>}</div>
            {editMode
                ? <ProfileDataForm initialValues={props.profile}  profile={props.profile} onSubmit={onSubmit}/>
                : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={props.profile} isOwner={props.isOwner} />}

            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>

    </div>
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
   return  <div>

       {isOwner && <div><button onClick={goToEditMode} class="btn btn-primary" type="submit" value="Submit">edit</button></div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>

        })}
        </div>
    </div>
}



export const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}


export default ProfileInfo;