import { BrowserRouter, Route, Routes } from "react-router-dom";
import path from "./ultils/path";
import { HOME, LOGIN, PUBLIC } from "./pages/public";
import Header from "./components/Header/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={path.PUBLIC} element={<PUBLIC />}>
          <Route path={path.HOME} element={<HOME />} />
          <Route path={path.LOGIN} element={<LOGIN />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
