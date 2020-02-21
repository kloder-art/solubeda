export const TYPES = {
  SET_THEME: 'set_theme',
  SET_SIDEBAR_VISIBILITY: 'set_sidebar_visibility'
};

const setTheme = (str) => {
  return {
    type: TYPES.SET_THEME,
    payload: str
  };
};

const setSidebarVisibility = (bool) => {
  return {
    type: TYPES.SET_SIDEBAR_VISIBILITY,
    payload: bool
  };
};

export default {
  setTheme,
  setSidebarVisibility
};
