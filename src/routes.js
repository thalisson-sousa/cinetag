import Favoritos from "pages/Favoritos";
import Paginabase from "pages/PaginaBase";
import Player from "pages/Player";
import Inicio from "pages/inicio";
import NotFound from "pages/notFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Paginabase />}>
          <Route index element={<Inicio />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
