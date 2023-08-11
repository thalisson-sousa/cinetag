import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "contextos/Favoritos";
import { Outlet } from "react-router-dom";

export default function Paginabase() {
  return (
    <main>
      <Cabecalho />
        <FavoritosProvider>
          <Container>
            <Outlet />
          </Container>
        </FavoritosProvider>
        <Rodape />
    </main>
  );
}
