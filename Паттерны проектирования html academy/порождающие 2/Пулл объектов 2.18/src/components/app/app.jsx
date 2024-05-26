import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "/src/components/pages/main-page/main-page";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import Order from "/src/components/pages/order/order";
import { AppRoute } from "/src/const";
import features from "/src/mocks/features";
import products from "/src/mocks/products";
import ScrollTop from "/src/components/ui/scroll-top/scroll-top";
import { GlobalStyle } from "./styles";

// Корневой компонент всего приложения
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={features} />} />
            <Route
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={<Order products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
