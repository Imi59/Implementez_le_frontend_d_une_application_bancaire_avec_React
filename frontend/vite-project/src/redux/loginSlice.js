import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login", // Nom de la slice dans le store Redux
  initialState: {
    userToken: null, // État initial du token utilisateur
    userProfil: null, // État initial du profil utilisateur
  },
  reducers: {
    // Action pour connecter l'utilisateur
    loginUser: (state, action) => {
      state.userToken = action.payload; // Met à jour le token utilisateur avec les données fournies
    },
    // Action pour déconnecter l'utilisateur
    logoutUser: (state) => {
      state.userToken = null; // Réinitialise le token utilisateur
      state.userProfil = null; // Réinitialise le profil utilisateur
    },
    // Action pour stocker les données utilisateur
    infoUser: (state, action) => {
      state.userProfil = action.payload; // Met à jour le profil utilisateur avec les données fournies
    },
    // Action pour stocker ou mettre à jour le nom d'utilisateur
    infoUserName: (state, action) => {
      state.userProfil.userName = action.payload; // Met à jour le nom d'utilisateur dans le profil utilisateur
    },
  },
});

// Export des actions générées automatiquement par createSlice
export const { loginUser, logoutUser, infoUser, infoUserName } =
  loginSlice.actions;

export default loginSlice; // Export du slice lui-même
