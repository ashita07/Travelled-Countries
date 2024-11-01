import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product copy";
import Pricing from "./pages/Pricing copy";
import HomePage from "./pages/Homepage copy";
import PageNotFound from "./pages/PageNotFound copy";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
// import PageNav from "./components/PageNav";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="applayout" element={<AppLayout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
