import { userEffect } from 'react';
import Router from './Router/Router.jsx';
import Footer from './components/footer';
import { useDispatch } from 'react-redux';
import { loginUser } from './redux/userReduser';
// import withIcon from './hocs/WithIcon';
// import withToggle from './hocs/WithToggle';
// import store, {
//   getSessionAction,
// } from './redux/StoreWithoutReduxToolkit/store';

import './App.css';

// const Title = ({ iconName, toggle }) => <h1>Super Title for: {iconName}</h1>;
// const TitleWithIconWithToggle = withIcon(
//   'cloud-computing',
//   'medium',
// )(withToggle(Title));

// store.dispatch(getSessionAction({ email: 'Al@al.com', password: 'qwerty1' }));

function App({ auth }) {
  // const dispatch = useDispatch();

  // userEffect(() => {
  //   dispatchEvent(loginUser({ email: 'Al@al.com', password: 'qwerty1' }));
  // });
  return (
    <div className="app-wrapper">
      <div className="app-content">
        {/* <TitleWithIconWithToggle /> */}
        <Router />
      </div>

      <Footer />
    </div>
  );
}

export default App;
