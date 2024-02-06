import axios from "axios";
import { server } from "../store";

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
