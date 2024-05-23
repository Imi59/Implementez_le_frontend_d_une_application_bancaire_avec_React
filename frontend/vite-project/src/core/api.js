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

  // Vérifiez le statut de la réponse pour détecter les erreurs
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log("Response from logUser:", data); // Ajout du log ici
  return data; // Retourne la réponse de l'API sous forme de JSON
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

  // Vérifiez le statut de la réponse pour détecter les erreurs
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log("Response from getUserProfile:", data); // Ajout du log ici
  return data; // Retourne la réponse de l'API sous forme de JSON
}
