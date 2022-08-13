## Messages
A message consist of a sender address (and optionally a receiver address) and some data.
NOTE: Data can be hidden (should be deciphered) ?

## Identity message (ID card, user)
{
  pubkey/address: SBThisisASampleSBAddressDoNotUseIt
  data: {
    name: MyUser,
    logo/etc
    // See to have a complete ActivityPub actor
  }
  signature: LDS_JFDS+LFLFDS== # sign(data,address)
}
NOTE: only for unmutable date

## Private message

{ sender, receiver, message }
or { group, data: {} } in a group or

## Authentified public message

A public message is a public authentified message (like twitter)
{
  pubkey/address: SBThisisASampleSBAddressDoNotUseIt
  data: {
    message: {}
  }
  signature: LDS_JFDS
}
Note that public message can only be done with public addresses and not private addresses

## Friendship/(Following)

A user can give his friendship to another user.
He can do so by signing the other user public key (Web of Trust)

## Private group invitation

This is a message from a group user to a user, sharing the group private key

{
  (sender: SBThisisASampleSBAddressDoNotUseIt optional)
  group: SBThisisASampleSBAddressDoNotUseIt
  receiver: SBThisisASampleSBAddressDoNotUseIt
  data: {the_shared_group_private_key}
}

We can also imagine

{
  sender, receiver, data: {hidden_group, hidden_private_key}
}

## Account recomputation

Encrypting keys and addresses tend to be generated and thus a safebook
account is partially 

## SAVED  [Addresse cryptographique (should be renamed to address publique)]

[DIDACTIQUE]:
Une addresse cryptographique identifie un utilisateur et permet de lui envoyer un message cryptographique ou publique

[TECHNIQUE]:
Une addresse cryptographique est une clé publique ecdh en base58 qui permet de fabriquer un message à envoyer

[REFERENCE]:
{
  pubkey: SBThisisASampleSBAddressDoNotUseIt
}

[QUESTION]:
Devons nous ajouter une composante de signature en plus de la composante DH ?
Alors on aurai des
- addresses de signature (ecdsa)
- addresses secretes (ecdh)

Si on peut utiliser la même clé pour chiffrer et signer alors parfait
Sinon l'addresse "principale" pourrait etre la clé de signature, et sur
le site on pourrait avoir un message avec une clé de chiffrement signée

[NOTE]:
Vanity: Des addresses commencant par SB

## SAVED Addresse privée (shadow address)

Une addresse privee est une addresse jetable
qui permette a l'utilisateur de recevoir un message
sans etre identifié ou (surtout) de stocker des donnée
(arbitrary data, following, messages)

On peut generer un flux virtuellement infini d'addresses jetable
(derivation successive (bip32 ou bip39)
ou deroulement d'un algo de flux)

== Group based private address
This is a private address associated with a group.
Only group members have access to this address.
