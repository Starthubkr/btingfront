export const INIT_MENTOR = "INIT_MENTOR";

export const MENTOR_CREATE_REQUEST = "MENTOR_CREATE_REQUEST";
export const MENTOR_CREATE_SUCCESS = "MENTOR_CREATE_SUCCESS";
export const MENTOR_CREATE_FAILURE = "MENTOR_CREATE_FAILURE";

export const MENTOR_IMAGE_REQUEST = "MENTOR_IMAGE_REQUEST";
export const MENTOR_IMAGE_SUCCESS = "MENTOR_IMAGE_SUCCESS";
export const MENTOR_IMAGE_FAILURE = "MENTOR_IMAGE_FAILURE";

export const MENTOR_LIST_REQUEST = "MENTOR_LIST_REQUEST";
export const MENTOR_LIST_SUCCESS = "MENTOR_LIST_SUCCESS";
export const MENTOR_LIST_FAILURE = "MENTOR_LIST_FAILURE";

export const MENTOR_ONE_REQUEST = "MENTOR_ONE_REQUEST";
export const MENTOR_ONE_SUCCESS = "MENTOR_ONE_SUCCESS";
export const MENTOR_ONE_FAILURE = "MENTOR_ONE_FAILURE";

export const MENTOR_REMOVE_REQUEST = "MENTOR_REMOVE_REQUEST";
export const MENTOR_REMOVE_SUCCESS = "MENTOR_REMOVE_SUCCESS";
export const MENTOR_REMOVE_FAILURE = "MENTOR_REMOVE_FAILURE";

export const MENTOR_UPDATE_REQUEST = "MENTOR_UPDATE_REQUEST";
export const MENTOR_UPDATE_SUCCESS = "MENTOR_UPDATE_SUCCESS";
export const MENTOR_UPDATE_FAILURE = "MENTOR_UPDATE_FAILURE";

export const MENTOR_UPDATE_IMG_REQUEST = "MENTOR_UPDATE_IMG_REQUEST";
export const MENTOR_UPDATE_IMG_SUCCESS = "MENTOR_UPDATE_IMG_SUCCESS";
export const MENTOR_UPDATE_IMG_FAILURE = "MENTOR_UPDATE_IMG_FAILURE";

const initialState = {
  mentorLists: [],
  mentor: null,
  imgPath: null,
  isMentorCreateLoading: false,
  isMentorCraeteDone: false,
  isMentorCraeteError: null,
  isMentorImageLoading: false,
  isMentorImageDone: false,
  isMentorImageError: null,
  isMentorListLoading: false,
  isMentorListDone: false,
  isMentorListError: null,
  isMentorOneLoading: false,
  isMentorOneDone: false,
  isMentorOneError: null,
  isMentorRemoveLoading: false,
  isMentorRemoveDone: false,
  isMentorRemoveError: null,
  isMentorUpdateLoading: false,
  isMentorUpdateDone: false,
  isMentorUpdateError: null,
  isMentorUpdateImgLoading: false,
  isMentorUpdateImgDone: false,
  isMentorUpdateImgError: null,
};

const mentor = (state = initialState, action) => {
  switch (action.type) {
    case INIT_MENTOR:
      return {
        ...state,
        isMentorCraeteDone: false,
        isMentorImageDone: false,
        isMentorRemoveDone: false,
        isMentorUpdateDone: false,
        isMentorUpdateImgDone: false,
      };
    case MENTOR_CREATE_REQUEST:
      return {
        ...state,
        isMentorCreateLoading: true,
        isMentorCraeteDone: false,
        isMentorCraeteError: null,
      };
    case MENTOR_CREATE_SUCCESS:
      return {
        ...state,
        isMentorCreateLoading: false,
        isMentorCraeteDone: true,
      };
    case MENTOR_CREATE_FAILURE:
      return {
        ...state,
        isMentorCreateLoading: false,
        isMentorCraeteError: action.error,
      };
    case MENTOR_IMAGE_REQUEST:
      return {
        ...state,
        isMentorImageLoading: true,
        isMentorImageDone: false,
        isMentorImageError: null,
      };
    case MENTOR_IMAGE_SUCCESS:
      return {
        ...state,
        isMentorImageLoading: false,
        isMentorImageDone: true,
        imgPath: action.data,
      };
    case MENTOR_IMAGE_FAILURE:
      return {
        ...state,
        isMentorImageLoading: false,
        isMentorImageError: action.error,
      };
    case MENTOR_LIST_REQUEST:
      return {
        ...state,
        isMentorListLoading: true,
        isMentorListDone: false,
        isMentorListError: null,
      };
    case MENTOR_LIST_SUCCESS:
      return {
        ...state,
        isMentorListLoading: false,
        isMentorListDone: true,
        mentorLists: action.data,
      };
    case MENTOR_LIST_FAILURE:
      return {
        ...state,
        isMentorListLoading: false,
        isMentorListError: action.error,
      };
    case MENTOR_ONE_REQUEST:
      return {
        ...state,
        isMentorOneLoading: true,
        isMentorOneDone: false,
        isMentorOneError: null,
      };
    case MENTOR_ONE_SUCCESS:
      return {
        ...state,
        isMentorOneLoading: false,
        isMentorOneDone: true,
        mentor: action.data,
      };
    case MENTOR_ONE_FAILURE:
      return {
        ...state,
        isMentorOneLoading: false,
        isMentorOneError: action.error,
      };
    case MENTOR_REMOVE_REQUEST:
      return {
        ...state,
        isMentorRemoveLoading: true,
        isMentorRemoveDone: false,
        isMentorRemoveError: null,
      };
    case MENTOR_REMOVE_SUCCESS:
      return {
        ...state,
        isMentorRemoveLoading: false,
        isMentorRemoveDone: true,
      };
    case MENTOR_REMOVE_FAILURE:
      return {
        ...state,
        isMentorRemoveLoading: false,
        isMentorRemoveError: action.error,
      };
    case MENTOR_UPDATE_REQUEST:
      return {
        ...state,
        isMentorUpdateLoading: true,
        isMentorUpdateDone: false,
        isMentorUpdateError: null,
      };
    case MENTOR_UPDATE_SUCCESS:
      return {
        ...state,
        isMentorUpdateLoading: false,
        isMentorUpdateDone: true,
      };
    case MENTOR_UPDATE_FAILURE:
      return {
        ...state,
        isMentorUpdateLoading: false,
        isMentorUpdateError: action.error,
      };
    case MENTOR_UPDATE_IMG_REQUEST:
      return {
        ...state,
        isMentorUpdateImgLoading: true,
        isMentorUpdateImgDone: false,
        isMentorUpdateImgError: null,
      };
    case MENTOR_UPDATE_IMG_SUCCESS:
      return {
        ...state,
        isMentorUpdateImgLoading: false,
        isMentorUpdateImgDone: true,
        imgPath: action.data,
      };
    case MENTOR_UPDATE_IMG_FAILURE:
      return {
        ...state,
        isMentorUpdateImgLoading: false,
        isMentorUpdateImgError: action.error,
      };
    default:
      return state;
  }
};

export default mentor;
