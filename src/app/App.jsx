//
import Helmet from "react-helmet";

// Import Components
// import Home from "../pages/home";
// Import Router
import AppRouter from './router'

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Softy Pinko</title>
      </Helmet>
      <AppRouter />
    </div>
  );
}

export default App;
