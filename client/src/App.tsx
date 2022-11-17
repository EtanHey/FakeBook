//Personal workflow imports:
import { BrowserRouter as Router } from "react-router-dom";

//styling imports:
import "./views/styles/global.scss";

//local components imports:

import AnimatedRoutes from "./AnimatedRoutes";
import { useEffect } from "react";

function App() {
  useEffect(()=>{console.log('working?')},[])
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
