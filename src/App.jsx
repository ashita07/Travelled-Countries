import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useEffect, useState } from "react";/
import Product from "./pages/Product copy";
import Pricing from "./pages/Pricing copy";
import HomePage from "./pages/Homepage copy";
import PageNotFound from "./pages/PageNotFound copy";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CountryList from "./components/CountryList";
import CityList from "./components/CityList";
import City from "./components/City";
import Form from "./components/Form";
import { CityContextProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";

// import PageNav from "./components/PageNav";

export default function App() {
  return (
    <div>
      <CityContextProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="/login" element={<Login />} />
              <Route path="applayout" element={<AppLayout />}>
                <Route index element={<Navigate replace to="cities" />} />
                <Route
                  path="cities"
                  element={
                    <p>
                      <CityList />
                    </p>
                  }
                />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </CityContextProvider>
    </div>
  );
}
