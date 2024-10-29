import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Products from "./pages/Products";
import PageNotFound from "./pages/PageNotFound";
import { PostProvider } from "./components/PostProvider";

function App() {
  return (
    <BrowserRouter>
      <PostProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </PostProvider>
    </BrowserRouter>
  );
}

export default App;
