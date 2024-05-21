// Récupère le token de connexion
export async function logUser(email, password) {
  // Effectue une requête POST à l'API pour connecter l'utilisateur
  const response = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST", // Utilise la méthode POST pour envoyer les données de connexion
    headers: {
      "Content-Type": "application/json", // Spécifie que le corps de la requête est en JSON
    },
    body: JSON.stringify({ email, password }), // Convertit les informations de connexion en chaîne JSON
  });
  return response.json(); // Retourne la réponse de l'API sous forme de JSON
}

// Récupère le Profil Utilisateur
export async function getUserProfile(token) {
  // Effectue une requête POST à l'API pour récupérer le profil de l'utilisateur
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST", // Utilise la méthode POST pour la requête
    headers: {
      Authorization: `Bearer ${token}`, // Inclut le token d'authentification dans l'en-tête
    },
  });
  return response.json(); // Retourne la réponse de l'API sous forme de JSON
}

// Requête pour la modification du Username
export async function changeUsername(newUserName, token) {
  // Effectue une requête PUT à l'API pour modifier le nom d'utilisateur
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT", // Utilise la méthode PUT pour mettre à jour les données
    headers: {
      Authorization: `Bearer ${token}`, // Inclut le token d'authentification dans l'en-tête
      "Content-Type": "application/json", // Spécifie que le corps de la requête est en JSON
    },
    body: JSON.stringify({ userName: newUserName }), // Convertit le nouveau nom d'utilisateur en chaîne JSON
  });
  return response.json(); // Retourne la réponse de l'API sous forme de JSON
}
