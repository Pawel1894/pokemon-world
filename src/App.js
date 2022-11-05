import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Overlay from "./shared/UI/Overlay";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Overlay />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
