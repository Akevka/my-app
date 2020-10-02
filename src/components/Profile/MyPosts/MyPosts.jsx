import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormControls";


 const MyPosts = React.memo(props => {

     console.log("RENDER YO");

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>

    )
});

const maxLength30 = maxLengthCreator(30);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={s.textarea} component={Textarea} name="newPostText" validate={[required,maxLength30]} placeholder={"Post message"}/>
            </div>
            <div><button class="btn btn-primary" type="submit" value="Submit" >Add post</button></div>

        </form>
    )
}

const AddNewPostFormRedux = reduxForm ({form:"ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;