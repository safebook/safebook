<script setup>
const source = `
## Secret rendez-vous

### Table of Contents
1. [Contexte](#context)
2. [Points de rendez-vous](#rendez-vous-points)
3. [The necessity of precomputation](#precomputation)
4. [Anonymity filters](#anonymity-filters)
5. Extra: Rendez-vous tree

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

## Precomputation

Rendez-vous point pre-computation advantages for a social dark web.

Solution for the metadata problem on a messaging app

Let's say there is 10B users and we can precompute 30M per second. less
that 1h and less than 10GB are necessary to precompute all
associations.

Given that we have a secret rendez-vous point with every users, we can
listen to everyone, but we shouldn't advertise what are the secret
rendez-vous point that we listen, because it will obviously give away
that we are one of the parcticipant (sender or receiver).

While it should be possible for the network to store every messages for
a sufficient period of time using a DHT,

It would be impossible for a single user to process all messages. That
is where bloom filters takes place.

## Filtres de bloom

Un filtre de bloom est une structure de donnée probabilistique permettant
de savoir rapidement si un élément appartient à un ensemble.

### Utilisation pour l'anonymité

Lorsqu'on utilise un filtre de Bloom, on ne dévoile pas quels éléments on
recherche.

On peut se servir de cette propriété pour l'anonymité, lorsqu'on demande
quelquechose (des messages, etc) à un pair.

Ainsi, on evite de fuiter des métadonnées sur quels sont nos contacts, etc

### Exemple de construction du filtre pour un ensemble de points de rendez-vous

Pour simplifier on utilise une seule fonction de hash H

On rajoute un sel en redefinissant la fonction de hash comme <code>H'(x) = H(salt + x)</code>

## Extra: RDV tree for almost infinite "secret key" RDV point generation without knowing the secret key

*Beware, here rendez-vous points refer to a public key/secret keys couple*

To prevent RDV reuse we can derive n RDVs from one (kept secret) RDV
seed using H(RDV + "0"), H(RDV + "1"), ...<br />
It could also be powerful to use BIP32's CKDpub to compute child public
keys from the parent public key withou access to private keys, for a
semi-trusted setup
`
</script>

<template>
  <div class="prose lg:prose-xl">
    <vue3-markdown-it :source="source" html="true" />
  </div>
</template>
