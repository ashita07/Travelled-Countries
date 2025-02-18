import { CityContextProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProctectedRoute from "./pages/ProctectedRoute";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Product from "./pages/Product copy";
// import Pricing from "./pages/Pricing copy";
// import HomePage from "./pages/Homepage copy";
// import PageNotFound from "./pages/PageNotFound copy";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";
// import Login from "./pages/Login";
import CountryList from "./components/CountryList";
import CityList from "./components/CityList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/Homepage copy"));
const Pricing = lazy(() => import("./pages/Pricing copy"));
const Login = lazy(() => import("./pages/Login"));
const Product = lazy(() => import("./pages/Product copy"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound copy"));

// import PageNav from "./components/PageNav";

export default function App() {
  return (
    <div>
      <CityContextProvider>
        <AuthProvider>
          <BrowserRouter>
            <Suspense fallback={<SpinnerFullPage></SpinnerFullPage>}>
              <Routes>
                <Route index element={<HomePage />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="applayout"
                  element={
                    <ProctectedRoute>
                      <AppLayout />
                    </ProctectedRoute>
                  }
                >
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
            </Suspense>
          </BrowserRouter>
        </AuthProvider>
      </CityContextProvider>
    </div>
  );
}
