<template>
<div>
  <h2>Safebook</h2>

  <p>Safebook est un réseau social cryptographique.</p>

  <p>Vous possedez une <a href="#carte-didentité">carte d'identité cryptographique</a>
  et un <a href="#coffre-fort">coffre-fort</a>.</p>

  <p>Vous pouvez envoyer des messages privés ou publics.</p>
  
  <p>Tous les messages privés sont chiffrés de bout-en-bout.<br />
  Ils sont déchiffrables uniquement par le <a href="#coffre-fort">coffre-fort</a>.</p>
  
  <p>Tous les messages publics sont signés cryptographiquement par leur émetteur.<br />
  Ils sont sont vérifiables grâce à sa <a href="#carte-didentité">carte d'identité</a>.</p>
  
  <h2>Carte d'identité</h2>
  
  <p>Dans Safebook, la carte d'identité d'un utilisateur est une addresse cryptographique.</p>
  
  <p>Par exemple :</p>
  
  <blockquote>
  <b>Dy34PxQi9hhfys6oWPwHrvsKs6onxCyfzYVeXcKwBTQuDA2VM2</b>
  </blockquote>
  
  Et peut être partagée sous la forme d'un QR code :

  <br />
  
  <img alt="QRCode" src="../assets/qr.png">
  
  <p>Et peut être imprimé sur un papier, un mug, un T-shirt, ...</p>
  
  <p>Connaitre l'addresse d'un utilisateur permet de lui envoyer des messages privés <br /> et de verifier la provenance des messages publics sans avoir besoin d'un tiers (serveur, ...).</p>
  
  <h2>Coffre fort</h2>
  
  <p>Chaque utilisateur du réseau possède un <b>coffre fort cryptographique</b>.</p>
  
  <p>C'est un grand nombre aléatoire qui doit être gardé précieusement.</p>
  
  <p>Il se présente sous la forme d'une liste de mots comme celle ci :</p>
  
  <blockquote>
  <b>
  jealous evoke they breeze
  <br />
  brass fatal explain unhappy
  <br />
  disagree rice shine inch
  <br />
  page trip garment
  </b>
  </blockquote>
  
  <p>Ou un mot de passe comme celui ci:</p>
  
  <blockquote>
  <b>uPyibSL58eJ1eeCN2scuUf7v5FN4</b>
  </blockquote>
  
  <p>Il garantit mathématiquement l'accés au compte.</p>
</div>
</template>

<script>
export default {
  name: 'Documentation',
  data() { return {} },
  methods: {}
}
</script>
