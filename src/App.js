import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Overlay from "./shared/ui/Overlay";

// Create a client
const queryClient = new QueryClient();

const Pokemon = React.lazy(() => import("./pages/pokemon/Pokemon"));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Overlay />}>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/pokemon"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Pokemon />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
