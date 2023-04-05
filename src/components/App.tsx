import Error404 from "../pages/Error404";
import LandingPage from "../pages/LandingPage";
import ResultsPage from "../pages/ResultsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search/:query" element={<ResultsPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
