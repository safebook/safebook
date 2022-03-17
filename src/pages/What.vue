<template lang="pug">
div
  h2 Safebook

  p Safebook est un réseau social appartenant à ses utilisateurs.

  p C'est un logiciel libre de <a href>cryptographie</a>, pour un internet décentralisé.

  p Vous avez le contrôle sur votre vie privée, les données sont chiffrés et peuvent être autohébérgés.

  p Pas besoin d'internet, un identifiant contient toute l'information nécessaire pour communiquer.

  h3 Carte d'identité
  p
    | Vous possedez une 
    a(href="#carte-didentite") carte d'identité
    | .<br />
    | Elle permet à d'autres personnes de s'assurer de votre identité cryptographique.

  p Elle peut être sous forme d'un QR code :

  p: img(alt="QRCode" src="../assets/qr.png")

  p Ou sous la forme d'une addresse :

  blockquote
   b SB34PxQi9hhfys6oWPwHrvsKs6onxCyfzYVeXcKwBTQuDA2VM2

  p
    | Vous pouvez envoyer des messages publics. <br />
    | Les autres utilisateurs pourront vérifier qu'ils viennent vraiment de vous.

  p
    | Vous pouvez envoyer des messages privés. <br />
    | Ils sont chiffrés de tel manière que seul vous et vos interlocuteurs pourront les lire.

  p: small On peut imaginer de l'imprimer sur un sticker, un mug, un T-shirt, ...
  
  h3 Coffre fort
  p
    | Vous possedez également un coffre-fort cryptographique.<br />
    | Il garantit mathématiquement l'accés au compte.<br />
    | C'est comme un mot de passe qui vous permet d'accéder à vos clés de chiffrement.<br />

  p Il se présente sous la forme d'un un mot de passe comme celui ci:
  
  blockquote
    b uPyibSL58eJ1eeCN2scuUf7v5FN4

  p Ou d'une liste de mots mnémotechnique comme celle ci :
  
  blockquote: #worldlist
    .word disposer
    .word papoter
    .word loyal
    .word écureuil
    .word paresse
    .word traction
    .word toponyme
    .word serein
    .word vedette
    .word studieux
    .word meilleur
    .word tricoter 
</template>

<script>
export default {
  name: "What",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.word {
  display: inline-block !important;
  width: 33%;
  text-align: center;
  font-weight: bold;
}
</style>
