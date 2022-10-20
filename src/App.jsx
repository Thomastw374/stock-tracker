import "./styles/main.scss";
import StocksPage from "./pages/StocksPage/StocksPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StocksPage />} />
      </Routes>
    </div>
  );
}

export default App;
