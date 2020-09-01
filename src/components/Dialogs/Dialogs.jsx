import React from 'react';
import s from './Dialogs.module.css'

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";



const Dialogs = (props) => {

    let state = props.dialogsPage;


    let messagesElements = state.messages
        .map(m => <Message message={m.message} key={m.id}/>)

    let dialogsElements = state.dialogs
        .map( d => <DialogItem key={d.id} name= {d.name} id={d.id}/>)

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();

    }

    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.updateNewMessageBody(body);

    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <div className={s.area} ><textarea value={newMessageBody}
                                               onChange={onNewMessageChange}
                                               placeholder='Enter your message'/></div>
            <div className={s.button} ><button onClick={onSendMessageClick}>Send Message</button></div>

        </div>


    )
}
export default Dialogs;