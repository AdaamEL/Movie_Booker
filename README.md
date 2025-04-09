sources exercices js : 
- https://stackoverflow.com/questions/68849233/convert-a-string-to-base64-in-javascript-btoa-and-atob-are-deprecated
- https://www.w3schools.com/jsref/jsref_filter.asp

Ce projet consiste en la création d'une API utilisant NestJS pour interagir avec The Movie Database (TMDB). L'API permet de récupérer des informations sur les films, telles que les films actuellement en salle, la recherche de films par titre, les détails d'un film spécifique, et la liste des genres de films.

Endpoints

- Films Actuellement en Salle

  Endpoint : GET /movies/now-playing
  Description : Récupère la liste des films actuellement en salle.
  Paramètres :
  page (optionnel) : Numéro de la page pour la pagination.

- Recherche de Films

  Endpoint : GET /movies/search
  Description : Recherche des films par titre.
  Paramètres :
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

Sources :
- https://docs.nestjs.com/techniques/http-module
- https://docs.nestjs.com/techniques/configuration
- https://docs.nestjs.com/openapi/decorators


