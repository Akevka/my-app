import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store =
{

    _state: {

            profilePage: {

            },

            dialogsPage: {
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
            },
            sidebar: {

            },

        },
    getState() {
        return this._state;
    },
    _callSubscriber() {

},
    subscribe (observer){
        this._callSubscriber = observer; //observer
    },


    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

            this._callSubscriber(this._state);

    }

}









export default store;
window.store = store;











