# Safebook

A web3 social network

## Features

- Serverless. Statically hosted on ipfs and ens (safebook.eth) [TODO]
- Censorship resistant
- 100% open source

### Personnal page

- Static site generator from ethereum and ipfs data
- Give access to a personal IPNS filled with a CRDT feed of events and messages [TODO]
- IPFS static website generator for every user, based on the state and messages.
  Once your website is created (using for now a default template), it is also accessible as yourlogin.eth [TODO]

### Chat

- Every "room" is a also CRDT feed of message (It's a DAG instead of a chain to be able to merge, see Matrix, [Berty](https://berty.tech/docs/protocol) and Lamport Clock)
- Rendez-vous point for group conversation (Berty like, or maybe use berty directly) [TODO]
- On top of message feeds, use Matrix-like reply to, comment using emoji, etc (look for the feasability of being matrix-compatible) [TODO]
- ENS usernames [TODO]
- IPFS static website generator [TODO]
- Metamask/Brave integration ? (Can we get arbitrary data from a wallet to use it as a seed or a key)

### Auth

"One Seed to rule them all, One Key to find them, One Path to bring them all, And in cryptography bind them."

Make a hierarchical deterministic wallets (BIP32/44/85) and generate :

- Bitcoin and \*coin keys (Classical path)
- Ethereum wallet (Classical path)
- Private/Public ECDSA and ECDH keys (Custom)
- IPFS/IPNS private key
- a key for a password manager

## Wishlist

- Filecoin integration
- BRAVE token economy

## Question

Making a centralized "Safebook auth" service that allow using a shorter password to retrive the wallet,
but has really strong security settings (ex: 2 or 3 fails start an alert)
It seems a little antinomic and not possible on web3

## See also

- Berty
- Secure scuttlebutt

- OrbitDB
- Ceramic
