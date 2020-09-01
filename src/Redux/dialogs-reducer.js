const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {

        messages: [
            {id: 1, message: 'Privet'},
            {id: 2, message: 'Kak dela'},
            {id: 3, message: 'Kak sam'},
            {id: 4, message: 'Ya norm'},
            {id: 5, message: 'Ti kak'}
        ],
        dialogs: [
            {id: 1, name: 'Arkady'},
            {id: 2, name: 'Ivan'},
            {id: 3, name: 'Evgeny'},
            {id: 4, name: 'Denis'},
            {id: 5, name: 'Valera'}
        ],
        newMessageBody: ''

}

const dialogsReducer = (state = initialState, action) => {



    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };


        case  SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages,{id: 6, message: body} ]
            };

        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => ({

    type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;