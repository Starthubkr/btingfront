import axios from "axios";
import {
  MENTOR_CREATE_REQUEST,
  MENTOR_CREATE_SUCCESS,
  MENTOR_CREATE_FAILURE,
  INIT_MENTOR,
  MENTOR_IMAGE_REQUEST,
  MENTOR_IMAGE_SUCCESS,
  MENTOR_IMAGE_FAILURE,
  MENTOR_LIST_REQUEST,
  MENTOR_LIST_SUCCESS,
  MENTOR_LIST_FAILURE,
  MENTOR_ONE_REQUEST,
  MENTOR_ONE_SUCCESS,
  MENTOR_ONE_FAILURE,
  MENTOR_REMOVE_REQUEST,
  MENTOR_REMOVE_SUCCESS,
  MENTOR_REMOVE_FAILURE,
  MENTOR_UPDATE_REQUEST,
  MENTOR_UPDATE_SUCCESS,
  MENTOR_UPDATE_FAILURE,
  MENTOR_UPDATE_IMG_REQUEST,
  MENTOR_UPDATE_IMG_SUCCESS,
  MENTOR_UPDATE_IMG_FAILURE,
} from "../reducers/mentor";

export const initMentor = () => (dispatch) => {
  dispatch({
    type: INIT_MENTOR,
  });
};
export const createMentor = (info) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_CREATE_REQUEST });
    await axios.post("/mentor/create", info.data);
    dispatch({ type: MENTOR_CREATE_SUCCESS });
  } catch (error) {
    dispatch({ type: MENTOR_CREATE_FAILURE });
  }
};

export const mentorImage = (img) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_IMAGE_REQUEST });
    const result = await axios.post("/mentor/image", img.data);
    dispatch({ type: MENTOR_IMAGE_SUCCESS, data: result.data });
  } catch (error) {
    dispatch({
      type: MENTOR_IMAGE_FAILURE,
      error: error.response.data,
    });
  }
};

export const mentorList = () => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_LIST_REQUEST });
    const result = await axios.get("/mentor");
    dispatch({
      type: MENTOR_LIST_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_LIST_FAILURE,
    });
  }
};

export const mentorOne = (mentorId) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_ONE_REQUEST });
    const result = await axios.get(`/mentor/${mentorId}`);
    dispatch({
      type: MENTOR_ONE_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_ONE_FAILURE,
    });
  }
};

export const mentorRemove = (mentorId) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_REMOVE_REQUEST });
    const result = await axios.delete(`/mentor/${mentorId.data}`);
    dispatch({
      type: MENTOR_REMOVE_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_REMOVE_FAILURE,
    });
  }
};

export const mentorUpdate = (mentor) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_UPDATE_REQUEST });
    const result = await axios.post("/mentor/update", mentor.data);
    dispatch({
      type: MENTOR_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_UPDATE_FAILURE,
    });
  }
};

export const mentorUpdateImg = (imageFormData) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_UPDATE_IMG_REQUEST });
    const result = await axios.post("/mentor/updateimage", imageFormData.data);
    dispatch({
      type: MENTOR_UPDATE_IMG_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_UPDATE_IMG_FAILURE,
      error: error.response.data,
    });
  }
};
