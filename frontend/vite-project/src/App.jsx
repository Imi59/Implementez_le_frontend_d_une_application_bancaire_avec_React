import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import User from "./components/User/User.jsx"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sign-in"
          // Définition du chemin de la route, ici pour l'URL "/sign-in"
          // Appel de la fonction redirectIfLoggedIn() pour vérifier si l'utilisateur est connecté et le rediriger si nécessaire
          // Composant de la page de connexion qui sera rendu si l'utilisateur n'est pas connecté
          //element est une propriété qui permet de spécifier le contenu à rendre lorsque cette route est activée.
          element={
            <>
              <SignIn />
            </>
          }
        />
        <Route path="/user" element={<User />}  />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
