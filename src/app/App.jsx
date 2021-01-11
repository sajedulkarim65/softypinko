//
import Helmet from "react-helmet";

// Import Components
import Home from "../pages/home";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Softy Pinko</title>
      </Helmet>
      <Home />
    </div>
  );
}

export default App;
