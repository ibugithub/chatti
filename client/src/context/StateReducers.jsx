import { reducerCases } from "./constants"

export const initialState = {
  userInfo: {},
  newUser: false,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_USER_INFO:
      localStorage.setItem('userInfo', JSON.stringify(action.userInfo))
      return {
        ...state, userInfo: action.userInfo,
      }
    case reducerCases.SET_NEW_USER:
      return {
        ...state, newUser: action.newUser,
      }
    default:
      return state;
  }
}