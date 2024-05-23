// Importation de configureStore de Redux Toolkit pour créer le store Redux
import { configureStore } from "@reduxjs/toolkit";
// Importation des fonctions persistStore et persistReducer de redux-persist pour la persistance des données
import { persistStore, persistReducer } from "redux-persist";
// Importation du module de stockage de redux-persist, qui utilise localStorage par défaut
import storage from "redux-persist/lib/storage"; // localStorage par défaut
// Importation du slice de login qui contient le reducer et les actions pour gérer l'état de connexion
import loginSlice from "./loginSlice";

// Configuration de redux-persist pour déterminer comment et où stocker les données persistées
const persistConfig = {
  key: "root", // Clé de base pour le stockage dans localStorage
  storage, // Utilisation de localStorage pour stocker l'état
};

// Création d'un reducer persisté en combinant le reducer de login avec la configuration de persistance
const persistedReducer = persistReducer(persistConfig, loginSlice.reducer);

// Configuration du store Redux
export const mainStore = configureStore({
  reducer: {
    // Ajout du reducer persisté sous la clé 'login'
    login: persistedReducer,
  },
  // Configuration du middleware pour éviter les avertissements de sérialisation
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignorer les actions spécifiques de redux-persist pour éviter les avertissements de sérialisation
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/REGISTER",
          "persist/FLUSH",
        ],
      },
    }),
});

// Création du persistor pour gérer la persistance et la restauration de l'état
export const persistor = persistStore(mainStore);
