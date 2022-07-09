<template>
  <div class="text-center">
    <h1>Safebook</h1>
    <p>Safebook est un réseau social appartenant à ses utilisateurs</p>
    <p>C'est un logiciel libre de <a href class="text-blue-600 underline">cryptographie</a>, pour un internet décentralisé</p>
    <p>Vous avez le contrôle sur votre vie privée, les données sont chiffrés et peuvent être autohébérgés.</p>
    <p>Pas besoin d'internet, un identifiant contient toute l'information nécessaire pour communiquer.</p>
    <h3>Carte d'identité</h3>
    <p>Vous possedez une<a href="#carte-didentite">carte d'identité</a>.<br />
      Elle permet à d'autres personnes de s'assurer de votre identité cryptographique.
    </p>
    <p>Elle peut être sous forme d'un QR code :</p>
    <p><img class="inline" alt="QRCode" src="../../assets/qr.png"/></p>
    <p>Ou sous la forme d'une addresse :</p>
    <blockquote><b>SB34PxQi9hhfys6oWPwHrvsKs6onxCyfzYVeXcKwBTQuDA2VM2</b></blockquote>
    <p>
      Vous pouvez envoyer des messages publics. <br />
      Les autres utilisateurs pourront vérifier qu'ils viennent vraiment de vous.
    </p>
    <p>
      Vous pouvez envoyer des messages privés. <br />
      Ils sont chiffrés de tel manière que seul vous et vos interlocuteurs pourront les lire.
    </p>
    <p><small>On peut imaginer de l'imprimer sur un sticker, un mug, un T-shirt, ...</small></p>
    <h3>Coffre fort</h3>
    <p>
      Vous possedez également un coffre-fort cryptographique.<br />
      Il garantit mathématiquement l'accés au compte.<br />
      C'est comme un mot de passe qui vous permet d'accéder à vos clés de chiffrement.<br />
    </p>
    <p>Il se présente sous la forme d'un un mot de passe comme celui ci:</p>
    <blockquote><b>uPyibSL58eJ1eeCN2scuUf7v5FN4</b></blockquote>
    <p>Ou d'une liste de mots mnémotechnique comme celle ci :</p>
    <blockquote>
      <div id="worldlist">
        <div class="word">disposer</div>
        <div class="word">papoter</div>
        <div class="word">loyal</div>
        <div class="word">écureuil</div>
        <div class="word">paresse</div>
        <div class="word">traction</div>
        <div class="word">toponyme</div>
        <div class="word">serein</div>
        <div class="word">vedette</div>
        <div class="word">studieux</div>
        <div class="word">meilleur</div>
        <div class="word">tricoter</div>
      </div>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: 'What',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style>
.word {
  display: inline-block !important;
  width: 33%;
  text-align: center;
  font-weight: bold;
}
</style>
