
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


}

const dialogsReducer = (state = initialState, action) => {



    switch (action.type) {




        case  SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,

                messages: [...state.messages,{id: 6, message: body} ]
            };

        default:
            return state;
    }

}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE,newMessageBody})



export default dialogsReducer;