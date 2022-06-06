import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./routes/HelloWorld";

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
}

export default App;
