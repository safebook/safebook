<template>
  <div>
    <Header2>Contexte</Header2>
    <p>Un logiciel peer-to-peer, utilisant par exemple une DHT comme couche de stockage expose naturellement sa base de donnée de manière publique, base de donnée d'ailleur répliquée un grand nombre de fois.</p>
    <p>Dans Safebook Messenger, comme, par exemple, dans le protocol de Signal ou de de Berty, la cryptographie est utilisée pour rendre impossible de lire le contenu des messages si ils ne nous sont pas addressés.</p>
    <p>Cependant, même si le contenu des messages est chiffré et donc illisible, <b>les métadonnées ne sont pas chiffrés</b> car elles sont utiles au serveur pour savoir à qui sont destinés les messages, etc</p>
    <p>Cela inclut le ou les destinataires des messages, la date d'envoi, leur taille, etc... Des processus d'analyse existent pour utiliser les métadonnées pour desanonymiser les utilisateurs et récuperer toujours plus d'informations.</p>
    <p>Pour plus de détails au sujet des métadonnées vous pouvez lire <router-link to="metadata_in_signal">une critique du protocol de signal<router-link>.</p>
    <Header2>Objectif</Header2>
    <p>Nous voulons rendre inexploitable les métadonnées. </p>
    <Header2>Filtres de bloom</Header2>
    <p>Un filtre de bloom est une structure de donnée probabilistique permettant de savoir rapidement si un élément appartient à un ensemble.</p>
    <Header2>Utilisation pour l'anonymité</Header2>
    <p>
      Lorsqu'on utilise un filtre de Bloom, on ne dévoile pas quels éléments on recherche.<br />
      On peut se servir de cette propriété pour l'anonymité, lorsqu'on demande quelquechose (des messages, etc) à un pair.<br />
      Ainsi, on evite de fuiter des métadonnées sur quels sont nos contacts, etc
    </p>
    <Header2>Exemple donstruction du filtre pour un ensemble de points de rendez-vous</Header2>
    <p>
      Pour simplifier on utilise une seule fonction de hash H<br />
      On rajoute un sel en redefinissant la fonction de hash comme <code>H'(x) = H(salt + x)</code>
    </p>
  </div>
</template>

<script>
import { Header2 } from "@/components/typography"
export default {
  components: { Header2 }
}
</script>
