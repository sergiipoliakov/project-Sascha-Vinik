import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ApartmentPage from '../pages/Apartment';
import Login from '../components/auth/login';
import Registration from '../components/auth/registration';

export const paths = {
  MAIN: '/',
  LOGIN: '/login',
  REGISTRATION: '/registration',
  APARTMENT: id => `/apartment/${id}`,
};

const Router = () => {
  return (
    <>
      <Switch>
        <Route path={paths.MAIN} exact component={HomePage} />
        <Route
          path={paths.LOGIN}
          render={props => {
            console.log(props);
            return <Login {...props} extraPropName="value" />;
          }}
        />
        <Route path={paths.REGISTRATION} component={Registration} />
        <Route path={paths.APARTMENT(':id')} component={ApartmentPage} />
      </Switch>
    </>
  );
};
export default Router;
