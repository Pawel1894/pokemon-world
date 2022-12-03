import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Overlay from "./shared/ui/Overlay";
import Spinner from "./shared/ui/Spinner";

const Pokemons = React.lazy(() => import("./pages/pokemon/Pokemons"));
const PokemonDetail = React.lazy(() => import("./pages/pokemon/PokemonDetail"));
const Games = React.lazy(() => import("./pages/game/Games"));
const Items = React.lazy(() => import("./pages/item/Items"));

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
              <Suspense fallback={<Spinner center />}>
                <Pokemons />
              </Suspense>
            }
          />
          <Route
            path="/pokemon/:id"
            element={
              <Suspense fallback={<Spinner center />}>
                <PokemonDetail />
              </Suspense>
            }
          />
          <Route
            path="/game"
            element={
              <Suspense fallback={<Spinner center />}>
                <Games />
              </Suspense>
            }
          />
          <Route
            path="/item"
            element={
              <Suspense fallback={<Spinner center />}>
                <Items />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
