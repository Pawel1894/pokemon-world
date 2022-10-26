import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overlay from "./shared/UI/Overlay";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Overlay />}>
            <Route path="/" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
