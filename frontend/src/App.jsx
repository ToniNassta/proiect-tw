import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ProdusePage from "./Pages/ProdusePage.jsx";
import ProdusDetaliuPage from "./Pages/ProdusDetaliuPage.jsx";
import DesprePage from "./Pages/DesprePage.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ProdusePage />} />
        <Route path="/produse/:id" element={<ProdusDetaliuPage />} />
        <Route path="/despre" element={<DesprePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
