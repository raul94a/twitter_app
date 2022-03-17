import { configureStore, createSlice } from "@reduxjs/toolkit";

const authInitialState = {
    username: null,
    localId: null,
    idToken: null,
    tweets: [],
    loggedIn: null
}


const tweetSlice = createSlice({
    name: 'tweets',
    initialState:{tweets:[]},
    reducers:{
        setTweets(state,action){
            state.tweets = action.payload.tweets
        }
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
            setUsername(state, action) {
                state.username = action.payload.username
            }
        }
    }
)

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        tweets: tweetSlice.reducer
    }
})

export const authActions = authSlice.actions;
export const tweetActions = tweetSlice.actions;