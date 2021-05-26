import axios from "axios";
import {
  CREATE_IMAGE_FAILURE,
  CREATE_IMAGE_REQUEST,
  CREATE_IMAGE_SUCCESS,
  INIT_OBJECR,
  MAIL_CERTIFICATION_FAILURE,
  MAIL_CERTIFICATION_REQUEST,
  MAIL_CERTIFICATION_SUCCESS,
  USER_CREATE_FAILURE,
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_UPDATE_FAILURE,
  USER_UPDATE_IMG_FAILURE,
  USER_UPDATE_IMG_REQUEST,
  USER_UPDATE_IMG_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "../reducers/user";

export const initUser = () => (dispatch) => {
  dispatch({
    type: INIT_OBJECR,
  });
};

export const createUser = (info) => async (dispatch) => {
  try {
    dispatch({ type: USER_CREATE_REQUEST });

    await axios.post("/user/create", info.data);
    dispatch({
      type: USER_CREATE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: USER_CREATE_FAILURE,
      error: error.response.data,
    });
  }
};

export const createImgUser = (formData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_IMAGE_REQUEST });
    const result = await axios.post("/user/profileimage", formData.data);
    dispatch({
      type: CREATE_IMAGE_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_IMAGE_FAILURE,
      error: error.response.data,
    });
  }
};

export const loginUser = (info) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const result = await axios.post("/user/login", info.data);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${result.data.accessToken}`;
    dispatch({
      type: USER_LOGIN_SUCCESS,
      data: result.data.fullUserInfo,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      error: error.response.data,
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGOUT_REQUEST });
    await axios.get("/user/logout");
    axios.defaults.headers.common["Authorization"] = "";
    dispatch({
      type: USER_LOGOUT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGOUT_FAILURE,
      error: error.response.data,
    });
  }
};

export const certification = (info) => async (dispatch) => {
  try {
    dispatch({ type: MAIL_CERTIFICATION_REQUEST });
    await axios.post("/user/certification", info.data);
    setTimeout(() => {
      dispatch({
        type: MAIL_CERTIFICATION_SUCCESS,
      });
    }, 2000);
  } catch (error) {
    dispatch({
      type: MAIL_CERTIFICATION_FAILURE,
      error: error.response.data,
    });
  }
};

export const userUpdateImg = (imageFormData) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_IMG_REQUEST });
    const result = await axios.post("/user/updateimage", imageFormData.data);
    setTimeout(() => {
      dispatch({
        type: USER_UPDATE_IMG_SUCCESS,
        data: result.data,
      });
    }, 2000);
  } catch (error) {
    dispatch({
      type: USER_UPDATE_IMG_FAILURE,
      error: error.response.data,
    });
  }
};

export const userUpdate = (formData) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });
    const result = await axios.post("/user/update", formData.data);

    setTimeout(() => {
      dispatch({
        type: USER_UPDATE_SUCCESS,
        data: result.data,
      });
    }, 2000);
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAILURE,
      error: error.response.data,
    });
  }
};

export const userCheck = () => async (dispatch) => {
  try {
    const result = await axios.get("/user/authentication");
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${result.data.accessToken}`;
    dispatch({ type: USER_LOGIN_SUCCESS, data: result.data.fullUserInfo });
  } catch (err) {
    dispatch({
      type: USER_LOGOUT_FAILURE,
      error: err,
    });
  }
};
