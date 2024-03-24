import { createSlice } from "@reduxjs/toolkit";


const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null;
}
const initialState = {
  user: getUserFromStorage(),
  jwt: null

}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const appUser = { ...action.payload.appUser }
      console.log(appUser);
      const token = action.payload.jwtResponse.accessToken;
      state.user = appUser;
      state.jwt = token
      localStorage.setItem('user', JSON.stringify(appUser))
      localStorage.setItem('tk', action.payload.jwtResponse.token);
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user')
    }
  }
})
export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;