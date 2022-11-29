import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Overlay from "./shared/ui/Overlay";
import Spinner from "./shared/ui/Spinner";

const Pokemon = React.lazy(() => import("./pages/pokemon/Pokemon"));
const PokemonDetail = React.lazy(() => import("./pages/pokemon/PokemonDetail"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Overlay />}>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/pokemon"
            element={
              <Suspense fallback={<Spinner center={true} />}>
                <Pokemon />
              </Suspense>
            }
          />
          <Route
            path="/pokemon/:id"
            element={
              <Suspense fallback={<Spinner center={true} />}>
                <PokemonDetail />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
