import Footer from './components/footer';
import Router from './Router/Router.jsx';
// import withIcon from './hocs/WithIcon';
// import withToggle from './hocs/WithToggle';

import './App.css';

// const Title = ({ iconName, toggle }) => <h1>Super Title for: {iconName}</h1>;
// const TitleWithIconWithToggle = withIcon(
//   'cloud-computing',
//   'medium',
// )(withToggle(Title));

function App() {
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
