import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../components/async-loader';
import { AnimatedSwitch } from 'react-router-transition';

const Registration = asyncComponent({
  loader: () => import('../components/auth/registration'),
});

const Login = asyncComponent({
  loader: () => import('../components/auth/login'),
});
const ReduxPage = asyncComponent({
  loader: () => import('../components/redux-exemple/ReduxPage'),
});

const HomePage = asyncComponent({
  loader: () => import('../pages/HomePage'),
});

const TodoPage = asyncComponent({
  loader: () => import('../pages/TodoPage'),
});

const ApartmentPage = lazy(() => import('../pages/Apartment'));

export const paths = {
  MAIN: '/',
  LOGIN: '/login',
  REGISTRATION: '/registration',
  APARTMENT: id => `/apartment/${id}`,
  TODO: '/todo',
  REDUX: '/redux',
};

const Router = () => {
  return (
    <>
      <Switch>
        <Suspense fallback={<h1>Loading...</h1>}>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route path={paths.MAIN} exact component={HomePage} />
            <Route
              path={paths.LOGIN}
              render={props => {
                return <Login {...props} extraPropName="value" />;
              }}
            />
            <Route path={paths.REGISTRATION} component={Registration} />
            <Route path={paths.APARTMENT(':id')} component={ApartmentPage} />
            <Route path={paths.TODO} component={TodoPage} />
            <Route path={paths.REDUX} component={ReduxPage} />
          </AnimatedSwitch>
        </Suspense>
      </Switch>
    </>
  );
};
export default Router;
