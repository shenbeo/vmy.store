import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Header = React.lazy(() => import("./components/Header"));
const Footer = React.lazy(() => import("./components/Footer"));
const Login = React.lazy(() => import("./components/Login"));
const Sidebar = React.lazy(() => import("./components/Sidebar"));
const Register = React.lazy(() => import("./components/Register"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const Loader = React.lazy(() => import("./components/Loader"));

function App() {
  return (
    <div>
      <Router>
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>

          <Sidebar />
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
