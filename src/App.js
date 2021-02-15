import Footer from './components/footer';
import Router from './Router/Router.jsx';

import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-content">
        <Router />
      </div>

      <Footer />
    </div>
  );
}

export default App;
