import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../components/async-loader';

const Registration = asyncComponent({
  loader: () => import('../components/auth/registration'),
});

const Login = asyncComponent({
  loader: () => import('../components/auth/login'),
});

const HomePage = asyncComponent({
  loader: () => import('../pages/HomePage'),
});

const ApartmentPage = lazy(() => import('../pages/Apartment'));

export const paths = {
  MAIN: '/',
  LOGIN: '/login',
  REGISTRATION: '/registration',
  APARTMENT: id => `/apartment/${id}`,
};

const Router = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path={paths.MAIN} exact component={HomePage} />
          <Route
            path={paths.LOGIN}
            render={props => {
              return <Login {...props} extraPropName="value" />;
            }}
          />
          <Route path={paths.REGISTRATION} component={Registration} />
          <Route path={paths.APARTMENT(':id')} component={ApartmentPage} />
        </Switch>
      </Suspense>
    </>
  );
};
export default Router;
