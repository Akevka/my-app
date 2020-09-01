import React from 'react';
import s from './Post.module.css';


const Post = (props) =>{

    return (

        <div className={s.item}>

            <img src='https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>

    )
}

export default Post;