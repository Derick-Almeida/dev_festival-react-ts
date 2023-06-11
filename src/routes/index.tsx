import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/home";

const PageRoutes = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<></>} />
        <Route path="/finished" element={<></>} />
      </Routes>
    </>
  );
};

export default PageRoutes;
