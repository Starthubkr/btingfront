export const INIT_OBJECR = "INIT_OBJECT";

export const USER_CREATE_REQUEST = "USER_CREATE_REQUEST";
export const USER_CREATE_SUCCESS = "USER_CREATE_SUCCESS";
export const USER_CREATE_FAILURE = "USER_CREATE_FAILURE";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const USER_LOGOUT_REQUEST = "USER_LOGOUT_REQUEST";
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";
export const USER_LOGOUT_FAILURE = "USER_LOGOUT_FAILURE";

export const CREATE_IMAGE_REQUEST = "CREATE_IMAGE_REQUEST";
export const CREATE_IMAGE_SUCCESS = "CREATE_IMAGE_SUCCESS";
export const CREATE_IMAGE_FAILURE = "CREATE_IMAGE_FAILURE";

export const MAIL_CERTIFICATION_REQUEST = "MAIL_CERTIFICATION_REQUEST";
export const MAIL_CERTIFICATION_SUCCESS = "MAIL_CERTIFICATION_SUCCESS";
export const MAIL_CERTIFICATION_FAILURE = "MAIL_CERTIFICATION_FAILURE";

export const USER_UPDATE_REQUEST = "USER_UPDATE_REQUEST";
export const USER_UPDATE_SUCCESS = "USER_UPDATE_SUCCESS";
export const USER_UPDATE_FAILURE = "USER_UPDATE_FAILURE";

export const USER_UPDATE_IMG_REQUEST = "USER_UPDATE_IMG_REQUEST";
export const USER_UPDATE_IMG_SUCCESS = "USER_UPDATE_IMG_SUCCESS";
export const USER_UPDATE_IMG_FAILURE = "USER_UPDATE_IMG_FAILURE";

const initialState = {
  userInfo: null,
  imgPath: null,
  isUserCreateLoading: false,
  isUserCreateDone: false,
  isUserCreateError: null,
  isUserLoginLoading: false,
  isUserLoginDone: false,
  isUserLoginError: null,
  isUserLogoutLoading: false,
  isUserLogoutDone: false,
  isUserLogoutError: null,
  isCreateImgLoading: false,
  isCreateImgDone: false,
  isCreateImgError: null,
  isMailCertificationLoading: false,
  isMailCertificationDone: false,
  isMailCertificationError: null,
  isUserUpdateLoading: false,
  isUserUpdateDone: false,
  isUserUpdateError: null,
  isUserUpdateImgLoading: false,
  isUserUpdateImgDone: false,
  isUserUpdateImgError: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case INIT_OBJECR:
      return {
        ...state,
        isUserUpdateDone: false,
        isUserCreateDone: false,
        isCreateImgDone: false,
        isUserLoginError: null,
      };
    case USER_CREATE_REQUEST:
      return {
        ...state,
        isUserCreateLoading: true,
        isUserCreateDone: false,
        isUserCreateError: null,
      };
    case USER_CREATE_SUCCESS:
      return {
        ...state,
        isUserCreateLoading: false,
        isUserCreateDone: true,
      };
    case USER_CREATE_FAILURE:
      console.log(action.error);
      return {
        ...state,
        isUserCreateLoading: false,
        isUserCreateError: action.error,
      };
    case CREATE_IMAGE_REQUEST:
      return {
        ...state,
        isCreateImgLoading: true,
        isCreateImgDone: false,
        isCreateImgError: null,
      };
    case CREATE_IMAGE_SUCCESS:
      return {
        ...state,
        isCreateImgLoading: false,
        isCreateImgDone: true,
        imgPath: action.data,
      };
    case CREATE_IMAGE_FAILURE:
      console.log(action.error);
      return {
        ...state,
        isCreateImgLoading: false,
        isCreateImgError: action.error,
      };
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isUserLoginLoading: true,
        isUserLoginDone: false,
        isUserLoginError: null,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.data,
        isUserLoginLoading: false,
        isUserLoginDone: true,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isUserLoginLoading: false,
        isUserLoginError: action.error,
      };
    case USER_LOGOUT_REQUEST:
      return {
        ...state,
        isUserLogoutLoading: true,
        isUserLogoutDone: false,
        isUserLogoutError: null,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        userInfo: null,
        isUserLogoutLoading: false,
        isUserLogoutDone: true,
        isUserLoginDone: false,
      };
    case USER_LOGOUT_FAILURE:
      return {
        ...state,
        isUserLogoutLoading: false,
        isUserLogoutError: action.error,
      };
    case MAIL_CERTIFICATION_REQUEST:
      return {
        ...state,
        isMailCertificationLoading: true,
        isMailCertificationDone: false,
        isMailCertificationError: null,
      };
    case MAIL_CERTIFICATION_SUCCESS:
      return {
        ...state,
        isMailCertificationLoading: false,
        isMailCertificationDone: true,
      };
    case MAIL_CERTIFICATION_FAILURE:
      return {
        ...state,
        isMailCertificationLoading: false,
        isMailCertificationError: action.error,
      };
    case USER_UPDATE_REQUEST:
      return {
        ...state,
        isUserUpdateLoading: true,
        isUserUpdateDone: false,
        isUserUpdateError: null,
      };
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        userInfo: action.data,
        isUserUpdateLoading: false,
        isUserUpdateImgDone: false,
        isUserUpdateDone: true,
      };
    case USER_UPDATE_FAILURE:
      return {
        ...state,
        isUserUpdateLoading: false,
        isUserUpdateError: action.data,
      };
    case USER_UPDATE_IMG_REQUEST:
      return {
        ...state,
        isUserUpdateImgLoading: true,
        isUserUpdateImgDone: false,
        isUserUpdateImgError: null,
      };
    case USER_UPDATE_IMG_SUCCESS:
      return {
        ...state,
        imgPath: action.data,
        isUserUpdateImgLoading: false,
        isUserUpdateImgDone: true,
      };
    case USER_UPDATE_IMG_FAILURE:
      return {
        ...state,
        isUserUpdateImgLoading: false,
        isUserUpdateImgError: action.error,
      };
    default:
      return state;
  }
};

export default user;
