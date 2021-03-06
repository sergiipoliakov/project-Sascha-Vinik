import { sessionPending, sessionSuccess, sessionError } from './actions';
import { loginUser } from '../../services/auth.services';
export const getSessionOperation = ({ email, password }) => dispatch => {
  const asyncRequest = async () => {
    try {
      dispatch(sessionPending());
      const result = await loginUser({
        email,
        password,
      });

      dispatch(sessionSuccess(result.data));
    } catch (error) {
      dispatch(sessionError(error));
    }
  };
  asyncRequest();
};
