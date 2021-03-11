import Router from './Router/Router.jsx';
import Footer from './components/footer';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-content">
        <Router />
      </div>

      <Footer />
    </div>
  );
}

export default App;
