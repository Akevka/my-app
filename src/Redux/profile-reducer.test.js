import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render} from "@testing-library/react";
import App from "../App";
import React from "react";


let state = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 20},
        {id: 2, message: 'Its my first post', likesCount: 14}
    ]



};

test('new post should be added', () => {
    let action = addPostActionCreator('it-kamasutra')
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(3);

});

test('massage of new post should be correct', () => {
    let action = addPostActionCreator('it-kamasutra')
    let newState = profileReducer(state,action);
    expect(newState.posts[2].message).toBe('it-kamasutra' );
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost('1')

    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(1 );
});

test("after deleting length shouldn't be decrement if id is incorrect", () => {
    let action = deletePost(1000)

    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe( 2);
});