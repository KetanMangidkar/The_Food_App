import axios from "axios";
import { server } from "../store";

// action for the login user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });

    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });

    dispatch({
      type: "loadUserSucess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "loadUserFailed",
      payload: error.response.data.messege,
    });
  }
};

// action for the logout user
export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutRequest",
    });

    const {data} =await axios.get(`${server}/logout`, {
      withCredentials: true,
    });

    dispatch({
      type: "logoutSucess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "logoutFailed",
      payload: error.response.data.messege,
    });
  }
};
