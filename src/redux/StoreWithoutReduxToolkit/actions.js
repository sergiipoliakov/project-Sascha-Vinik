export const types = {
  SESSION_SECCESS: 'sessionSuccess',
  SESSION_ERROR: 'sessionError',
  SESSION_PENDING: 'sessionPending',
};

export const sessionSuccess = payload => {
  return {
    type: types.SESSION_SECCESS,
    payload,
  };
};

export const sessionError = payload => {
  return {
    type: types.SESSION_ERROR,
    payload,
  };
};

export const sessionPending = () => {
  return {
    type: types.SESSION_PENDING,
  };
};
