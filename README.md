sources exercices js : 
- https://stackoverflow.com/questions/68849233/convert-a-string-to-base64-in-javascript-btoa-and-atob-are-deprecated
- https://www.w3schools.com/jsref/jsref_filter.asp

Ce projet consiste en la création d'une API utilisant NestJS pour interagir avec The Movie Database (TMDB). L'API permet de récupérer des informations sur les films, telles que les films actuellement en salle, la recherche de films par titre, les détails d'un film spécifique, et la liste des genres de films.

- Endpoints
- Films Actuellement en Salle
Endpoint : GET /movies/now-playing
Description : Récupère la liste des films actuellement en salle.
Paramètres :
page (optionnel) : Numéro de la page pour la pagination.
- Recherche de Films
Endpoint : GET /movies/search
Description : Recherche des films par titre.
- Paramètres :
query (requis) : Titre du film à rechercher.
page (optionnel) : Numéro de la page pour la pagination.
- Détails d'un Film
Endpoint : GET /movies/:id
Description : Obtient les détails d'un film spécifique.
Paramètres :
id (requis) : Identifiant du film.
- Liste des Genres
Endpoint : GET /movies/genres
Description : Récupère la liste des genres de films.
- Déploiement
L'API a été déployée sur Render, et vous pouvez accéder aux endpoints via l'URL suivante : https://movie-booker-dy8y.onrender.com/api.

- Test des Endpoints avec Swagger
Pour tester les endpoints, vous pouvez utiliser l'interface Swagger disponible à l'adresse suivante : https://movie-booker-dy8y.onrender.com/api. Swagger vous permet de visualiser et d'interagir avec les différents endpoints de l'API.

- Authentification et Réservations
Pour tester les endpoints nécessitant une authentification, comme la création de réservations, vous devez d'abord vous connecter via l'endpoint /user/login pour obtenir un token JWT. Ensuite, utilisez ce token dans l'en-tête Authorization pour accéder aux endpoints protégés.

- Test du Frontend
Pour tester le frontend, vous pouvez suivre ces étapes :

- Connexion et Inscription :

Utilisez les endpoints /user/login et /user/register pour vous connecter ou vous inscrire.
Assurez-vous que le token JWT est stocké dans le localStorage après une connexion réussie.
- Création de Réservations :

Accédez à la page de création de réservations et remplissez le formulaire avec les informations nécessaires.
Vérifiez que les données sont correctement envoyées et que la réservation est créée avec succès.
Affichage des Réservations :

Après avoir créé une réservation, vous serez redirigé vers la page "Mes Réservations" où vous pourrez voir la liste de vos réservations.

Sources :
- https://docs.nestjs.com/techniques/http-module
- https://docs.nestjs.com/techniques/configuration
- https://docs.nestjs.com/openapi/decorators


