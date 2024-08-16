import { useRoutes } from "react-router-dom";
import { router } from "./router";
import "react-day-picker/style.css";
function App() {
  return <>{useRoutes(router)}</>;
}

export default App;
