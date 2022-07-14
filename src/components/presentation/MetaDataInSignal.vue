<script setup>
const source = `
## The metadata problem

### Signal

Dans le cas d'une fuite de la base de donnée de Signal, même si le contenu
des messages est chiffré, on peut tout de même extraire beaucoup
d'informations.

Tous les nom d'utilisateur et leurs numéros de téléphone.

Leurs amis et donc reconstruire le graphe social entre tous les utilisateurs.

Qui parle à qui et quand, les heures d'activités, etc

Un message dans signal contient un timestamp, l'addresse de l'envoyeur et du destinataire.

[(code source)](https://github.com/signalapp/Signal-Server/blob/main/service/src/main/proto/TextSecure.proto)

### Berty

Les comptes sont anonymes (pas associé à un numéro de téléphone ou à un email)

Lorsqu'on rejoint un groupe, on le fait sous une autre identité, ce qui empeche de connaitre les utilisateurs du groupe.

Les conversation 1-1 sont aussi des implémentés sous forme de groupes, ce qui empeche de connaitre nos correspondants.

Une conversation -> Une identité.

Cepedant, il faut vraiment faire attention car la base de donnée étant décentralisée (distribuée), elle est plus facilement accessible.

### Le champion: Bitmessage

Aucune fuite de métadonnées
`
</script>

<template>
  <div class="prose lg:prose-xl">
    <vue3-markdown-it :source="source" html="true" />
  </div>
</template>
