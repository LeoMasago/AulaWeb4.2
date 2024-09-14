import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; /* necessario para criar as rotas e ligar as páginas/conteudos */
import App from './App.jsx';
import './index.css';
import GenreListPage from './pages/GenreListPage.jsx';
import Home from './pages/Home.jsx';
import MovieDetailPage from './pages/MovieDetailPage.jsx';
import MovieListPage from './pages/MovieListPage.jsx';
import MoviesByGenrePage from './pages/MoviesByGenrePage.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

{/* Deve ter as rotas:
  home
  filmes
  Detalhes do Filme
  Lista de gêneros
  Filmes por gênero
  Page Not Found
  */}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", index: true, element: <Home /> },
      { path: "/genero", element: <GenreListPage /> },
      { path: "/detalhe", element: <MovieDetailPage /> },
      { path: "/filmes/:id", element: <MovieListPage /> },
      { path: "/genre/:id", element: <MoviesByGenrePage /> },
      { path: "*", element: <PageNotFound /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
