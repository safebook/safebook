<script setup>
const source = `
Safebook is a social network protocol.

It's a **free software** (free as in freedom). Everyone can use it, read the code and even modify it.

You really **own your data and account**, it's self-hostable and uses decentralized computing

It's **built for human rights**: It works in various network conditions, prevent surveillance and is uncensorable <small>(but you have the choice to use an algorithm to filter offensive content, enabled by default)</small>

<!-- ### [Create an account](/signup) -->

Safebook uses modern and new cryptographic algorithm and borrow concepts from bitcoin and the web3 mouvement.

Cryptography give us the tools for truly owning our data and accounts.

It also allow us to deny network surveillance when necessary.

<small>* here web3 isn't only about cryptocurrencies, but about cryptographic protocols (eg: git and bittorrent)</small>
<small>** spam and unappropriate content is filtered by the user by default</small>

## Why ?

- No third party, server or organisation (Code is law).
- Serverless. No centralized server.
- You don't have to trust the network or anyone (Trust is inherited from cryptography).
- Works with or without internet access.

## Governed by mathematical rules

(WIP)

Instead of relying on a server to manage access control, it's done by encryption.

For identification, no third-party needed thanks to digital signatures

Cryptography helps us have trust in each others, and making informations unfalsifiables and uncensorables

## Unbreachables accounts

There is no server-side account

At first there is the passphrase. (Safebook generate a cryptographically-strong passphrase for you. Some people may learn it by heart.)

Everything is generated from there. That means that if you login from a different device you're already good to go

We can derive :

- A signing key for the public profile, if necessary
- Multiples keys for storage (drive/photos)
- Multiples keys for private messaging
- A wallet addresses for bitcoin, ethereum, and other cryptocurrencies
- A password manager master key (wishlist) <span class="text-xs">(can support both classic hidden_passwords and deterministic passwords (ex: m/58/passwords/website_name))</span>
- PGP keys for compability with other tools (wishlist)

## Public profiles : Lightning fast decentralized websites

Store your website on the decentralized web using IPFS

Authentificate your website by signing it with your IPNS private key

Build a static pages at compile time to make your website lightning fast

Step by step :

- The user add keys to his state (username, picture, various info, public friends).
- The user add messages to his feed.
- Using a choosen template, a static webpage representing the user profile is generated.
- The webpage is sent to IPFS and signed as a IPNS link

## Private profile (Wishlist)

(WIP) You can put hidden_data in your profile and give the key only to your friends

## Almost invisible messaging (minimal metadata)

(WIP)

See here for metadata leak in the Signal protocol

## Decentralized IDs

Cf blogpost

## Features and wishlist

- No server-side stored account using instead a hierachical deterministic wallet to derive all the secrets
- Authentification and permission management is based on electronic signatures (like in bitcoin)
- Secure messaging is based on asymetric cryptography (think of a light version of the Signal protocol)
- Distributed file storage is base on IPFS and filecoin
- Static feed and personal webpage generator hosted on the decentralized web to allow a fast-accessed trusted (signed) profile (using decentrelized ids and decentralized domains, and hosting the website on the peer-to-peer web using IPFS and IPNS
- Bloom filters are used to avoid giving away rendez-vous points addresses
- Quantum resistant
- Ephemeral messages (time if unread, time after read)
- False pin code go to false account or delete all messages
- Machine learning using homomorphic encryption
`;
</script>

<template>
  <div class="prose lg:prose-xl">
    <vue3-markdown-it :source="source" html="true" />
  </div>
</template>
