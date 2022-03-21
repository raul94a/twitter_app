import { configureStore, createSlice } from "@reduxjs/toolkit";

const authInitialState = {
    username: null,
    email: null,
    alias: null,
    localId: null,
    idToken: null,
    loggedIn: null,
    tweets: [],
}

const uiControlSlice =  createSlice({
    name: 'ui',
    initialState: {openModal:false},
    reducers: {
        shouldOpenModal(state,action){
            state.openModal = true
        },
        shouldCloseModal(state,action){
            state.openModal = false
        }
    }
})


const tweetSlice = createSlice({
    name: 'tweets',
    initialState:{tweets:[], sendTweet: false},
    reducers:{
        setTweets(state,action){
            state.tweets = action.payload.tweets
        },
        changeSendingStatus(state,action){
            state.sendTweet = !state.sendTweet
        },
        addTweet(state,action){
            state.tweets.unshift(action.payload.tweet);
        },
    }
})

const authSlice = createSlice(
    {
        name: 'auth',
        initialState:  authInitialState,
        //reducers functions
        reducers: {
            login(state,actions){
              state.loggedIn = true
            },
            logout(state, action) {
                state.loggedIn = null
            },
            setCredentials(state, action) {
                state.username = action.payload.username;
                state.alias = action.payload.alias;
                state.localId = action.payload.localId
                state.idToken = action.payload.idToken
                state.email = action.payload.email
                state.loggedIn = true
            },
            addTweet(state,action){
                state.tweets.push(action.payload.tweet);
            }
        }
    }
)

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        tweets: tweetSlice.reducer,
        ui: uiControlSlice.reducer
    }
})

export const authActions = authSlice.actions;
export const tweetActions = tweetSlice.actions;
export const uiControlActions = uiControlSlice.actions;