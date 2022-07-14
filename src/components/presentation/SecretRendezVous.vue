<script setup>
const source = `
## Contexte

Un logiciel peer-to-peer, utilisant par exemple une DHT comme couche de
stockage expose naturellement sa base de donnée de manière publique, base
de donnée d'ailleur répliquée un grand nombre de fois.

Dans Safebook Messenger, comme, par exemple, dans le protocol de Signal ou
de de Berty, la cryptographie est utilisée pour rendre impossible de lire
le contenu des messages si ils ne nous sont pas addressés.

Cependant, même si le contenu des messages est chiffré et donc illisible,
<b>les métadonnées ne sont pas chiffrés</b> car elles sont utiles au
serveur pour savoir à qui sont destinés les messages, etc

Cela inclut le ou les destinataires des messages, la date d'envoi, leur
taille, etc... Des processus d'analyse existent pour utiliser les
métadonnées pour desanonymiser les utilisateurs et récuperer toujours plus
d'informations.

Pour plus de détails au sujet des métadonnées vous pouvez lire [une critique du protocol de signal](metadata_in_signal).

## Objectif

Nous voulons rendre inexploitable les métadonnées.

## Filtres de bloom

Un filtre de bloom est une structure de donnée probabilistique permettant
de savoir rapidement si un élément appartient à un ensemble.

## Utilisation pour l'anonymité

Lorsqu'on utilise un filtre de Bloom, on ne dévoile pas quels éléments on
recherche.

On peut se servir de cette propriété pour l'anonymité, lorsqu'on demande
quelquechose (des messages, etc) à un pair.

Ainsi, on evite de fuiter des métadonnées sur quels sont nos contacts, etc

## Exemple de construction du filtre pour un ensemble de points de rendez-vous

Pour simplifier on utilise une seule fonction de hash H

On rajoute un sel en redefinissant la fonction de hash comme <code>H'(x) = H(salt + x)</code>
`
</script>

<template>
  <div class="prose lg:prose-xl">
    <vue3-markdown-it :source="source" html="true" />
  </div>
</template>
