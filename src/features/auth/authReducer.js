import { createReducer } from "../../app/common/util/reducerUtil";
import { SIGN_OUT_USER, LOGIN_USER } from './authConstants'

const initialState = {
  currentUser: {}
}


const loginUser = (state, payload) => {
  return {
    ...state,
    authenticated: true,
    currentUser: payload.creds.email
  }
}

const signOutUser = (state, payload) => {
  return {
    ...state,
    authenticated: false,
    currentUser: {}
  }
}



export default createReducer(initialState, {
  [LOGIN_USER]: loginUser,
  [SIGN_OUT_USER]: signOutUser
})