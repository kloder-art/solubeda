export const TYPES = {
  SET_SIDEBAR_VISIBILITY: 'set_sidebar_visibility'
};

const setSidebarVisibility = (bool) => {
  return {
    type: TYPES.SET_SIDEBAR_VISIBILITY,
    payload: bool
  };
};

export default {
  setSidebarVisibility
};
