import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product copy";
import Pricing from "./pages/Pricing copy";
import HomePage from "./pages/Homepage copy";
import PageNotFound from "./pages/PageNotFound copy";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
// import PageNav from "./components/PageNav";

const BASE_URL = "http://localhost:8000";

export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("there's an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="applayout" element={<AppLayout />}>
            <Route
              index
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="cities"
              element={
                <p>
                  <CityList cities={cities} isLoading={isLoading} />
                </p>
              }
            />
            <Route path="countries" element={<p>Country</p>} />
            <Route path="form" element={<p>FORM</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
