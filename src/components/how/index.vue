<template>
<vue3-markdown-it :source="source" />
</template>

<script>
const source = `
# Serverless social network

Safebook est pensé pour pouvoir fonctionner dans des configurations distribués et décentralisés ou même sans serveur

Nous utiliseront la cryptographie pour assurer les fonctions suivantes :

- Confidentialité : Assurer que seul nos correspondants peuvent acceder aux messages, même si le réseau n'est pas fiable.
- Integrité : Assurer qu'un message provient bien de l'émetteur, même si le réseau n'est pas fiable
- Integrité : WIP: Assurer qu'on est bien à jour (qu'on a l'intégralité des messages)
- Assurer un espace de stockage sécurisé (comme mega)
- Fonctionner dans des réseaux peu fiables et censurés.
- WIP: Permettre l'envoi d'argent par une cryptomonnaie

# Idéologie

- Être minimaliste et fonctionnel.
- Être un outil d'autodéfense numérique.
- Être une aide et non un frein dans la gestion de son réseau (pas de feed organisé via du machine learning, facilités pour retrouver les messages)

# Comptes

Un compte est avant tout un secret (mot de passe ou phrase mnémotechnique) qu'on obtient lors de la création du compte.

Ce secret permet de regénérer l'ensemble des clef publiques et privés.

Les comptes ne sont donc pas stockés sur le serveur.
Parfois on y déposera quand même un message d'annonce associé à sa clef publique.
Sinon seuls les messages sont stockés.

# Carte d'identité

Une carte d'identité est avant tout un grand nombre (32 bits) qui est la clef publique de l'utilisateur.

Elle contient toutes les informations pour vérifier l'integrité de ses messages publiques,
ou, plus souvent, pour communiquer de manière chiffré avec l'utilisateur.

Elle peut être absente ou présente sur le serveur dans un message d'annonce.

# Message d'annonce

Le message d'annonce est un message auto-signé par le propriétaire du compte.

Il contient des information additionnels : nom ou pseudo, image ou photo, etc...

# Message publique

Un utilisateur peut envoyer des messages publiques signés (texte, photos, ...)

# Groupes publiques

WIP

# Message privés

Un message privé est envoyé à un utilisateur ou un groupe et est chiffré de bout en bout.

On peut envoyer un message privé sans être connecté, dans ce cas un compte temporaire et anonyme est généré.

# Groupe privé

Un groupe privé ressemble beaucoup à un utilisateur partagé.

- Invitation: Partage de la clef privée du groupe
- Revocation: Impossible


# Signer des messages JSON

Gros WIP.

Il faut pouvoir encoder uniquement les messages (espaces, ordre des champs...)
dans tous les languages de programmation.

On recherche une forme canionique du JSON, et celle utilisé par JSON-LD
semble beaucoup trop lourde. MessagePack semble bien mais n'a pas non
plus de forme invariante du a des details d'implémentations.

(Est-ce qu'on a vraiment besoin de ca ? On pourrait stocker les json en string
et juste verifier la chaine de chars ?)

## Tree of interest

The tree of interest is a way to lookup for addresses without sharing the exact addresses

ex:
....S...
....|...
....B...
.|.|..|..|..|
.k.j..1..4..5
.|.......|..|
j.r      3..N
to listen for SBkj\* SBkr\* SBj\* SB1\* SB43\* and SB5N\*

# Addresses (WIP)

Addresses in safebook are 32-bit integers encoded with base58.

Exemple:
- SBThisisASampleSBAddressDoNotUseIt
- ThisCanBeAUserorAGroupShadowAddres

Address represent a user or a private group. (A private group in safebook
is really just a shared user)

There is two kind of addresses: *direct* and *shadow*.

*Direct addresses* identify a user or group and solely allow oneself to send
encrypted message or to authetify publications.

They represent a curve25519/ed25519 public key.

For a user, they are derived directly from the safebook passphrase.

They often start with SB, sb, Sb or sB (vanity addresses) to differentiate
them from other addresses (bitcoin, ...)

*Shadow addresses* aims to tackle the problem of anonymity. but they require a prior of handshake.

They represent a random 32-bit integer (and thus rarely start with SB)

- 1-to-1 private messages shadow address are derived from the ecdh common message/key and thus can be recomputed by both parties.

  It is a common way to send a encrypted message to a user without leaking too much metadata

  To listen to shadow address you must follow this person

- group shadow address

  They represent alias for the group name

- one-time generated 

Exemple:
- SBThisisASampleSBAddressDoNotUseIt
- ThisCanBeAUserorAGroupShadowAddres

[TECHNIQUE]
(WIP because it's probably better to seperate ECDH and ECDSA)
Nous utiliseront une même clé Curve25519 pour DH ET la signatures.
(Le papier [[https://eprint.iacr.org/2011/615][On the Joint Security of Encryption and Signature in EMV]] [[[https://crypto.stackexchange.com/questions/3260/using-same-keypair-for-diffie-hellman-and-signing][2]]] prouve la sécurité d'un tel usage dans des conditions similaires.


`

export default {
  name: 'How',
  data () {
    return {
      source
    }
  }
}
</script>

<style>
#markdown {
  text-align: left;
  margin: 10px;
}
#markdown h1 {
  text-align: center !important;
}
.word {
  display: inline-block !important;
  width: 33%;
  text-align: center;
  font-weight: bold;
}
</style>
