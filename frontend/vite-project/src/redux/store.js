import { configureStore } from "@reduxjs/toolkit"; // Import de configureStore de Redux Toolkit pour configurer le store Redux
import { persistStore, persistReducer } from "redux-persist"; // Import des fonctions pour persister le state dans le stockage local
import storage from "redux-persist/lib/storage"; // Import du stockage local (localStorage) pour persister le state
import loginSlice from "./loginSlice"; // Import du slice Redux qui gère l'état de connexion (login)

const persistConfig = {
  key: "root", // Clé racine sous laquelle l'état persistant sera stocké dans le localStorage
  storage, // Middleware de stockage utilisé pour persister les données (localStorage dans ce cas)
};

// Création d'un réducteur persistant en combinant le réducteur du slice de login avec la configuration de persistance
const persistedReducer = persistReducer(persistConfig, loginSlice.reducer);

export const mainStore = configureStore({
  reducer: {
    // Utilisation du réducteur persistant pour gérer l'état de connexion (login)
    login: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    // Ajout de middleware par défaut avec une configuration pour ignorer certaines actions spécifiques à redux-persist
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST", // Action ignorée pour la vérification de sérialisation
          "persist/REHYDRATE", // Action ignorée pour la vérification de sérialisation
          "persist/PAUSE", // Action ignorée pour la vérification de sérialisation
          "persist/PURGE", // Action ignorée pour la vérification de sérialisation
          "persist/REGISTER", // Action ignorée pour la vérification de sérialisation
          "persist/FLUSH", // Action ignorée pour la vérification de sérialisation
        ],
      },
    }),
});

// Création du persistor, qui permet de persister et de réhydrater l'état du store
export const persistor = persistStore(mainStore);
