Même si le contenu des messages est chiffré, on peut tout le même extraire pas mal d'informations de la base de donnée de Signal.

- Tous les nom d'utilisateur et leurs numéros de téléphone.
- Leurs amis et donc reconstruire le graphe social entre tous les utilisateurs.
- Qui parle à qui et quand, les heures d'activités, etc)

En plus du stockage en clair du numéro de téléphone et de certaines informations du profil, on peut en reconstruire d'autres avec les metadatas.

Un message dans signal contient un timestamp, l'addresse de l'envoyeur et du destinataire. [1]

[1]: https://github.com/signalapp/Signal-Server/blob/main/service/src/main/proto/TextSecure.proto
