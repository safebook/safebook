<template>
  <div>
    <h2>Signal</h2>
    <p>
      Dans le cas d'une fuite de la base de donnée de Signal, même si le contenu
      des messages est chiffré, on peut tout de même extraire beaucoup
      d'informations.
    </p>
    <ul class="list-disc list-inside">
      <li>Tous les nom d'utilisateur et leurs numéros de téléphone.</li>
      <li>
        Leurs amis et donc reconstruire le graphe social entre tous les
        utilisateurs.
      </li>
      <li>Qui parle à qui et quand, les heures d'activités, etc</li>
    </ul>
    <p>
      Un message dans signal contient un timestamp, l'addresse de l'envoyeur et
      du destinataire.
      <a
        class="text-blue-500"
        href="https://github.com/signalapp/Signal-Server/blob/main/service/src/main/proto/TextSecure.proto"
        >(code source)</a
      >
    </p>
    <h2>Le champion: Bitmessage</h2>
    <p>Aucune fuite de métadonnées</p>
    <h2>Berty</h2>
    <p>Meme problème il me semble.</p>
    <p>
      C'est d'autant plus embettant que la base de donnée est accessible de
      manière casi publique, car décentralisé (architecture distribuée sur
      IPFS).
    </p>
    <h2>Autres</h2>
  </div>
</template>
