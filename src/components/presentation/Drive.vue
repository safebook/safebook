<script setup>
const source = `
## Safebook Drive

An experiment toward a **fully decentralized cloud engine**, based on a mesh of user-operated IPFS gateways.

**Data encryption** avoid **surveillance**.

**P2P networks** works everywhere, even on a **censored internet**.

Cost should be **much cheaper** than google drive, AWS or mega.

### Technology

The cloud server (that should be run directly on the client whenever possible) is implemented as a IPFS gateway for hot storage, and a Filecoin client (Lotus) for cold storage.

We store everything on IPFS, on servers of our federation.

Everything could be duplicated into Filecoin, for access for everywhere.

<small>The Safebook Drive software is Peer-to-Peer but cannot yet run on a phone or on the browser, as it require good connectivity and running go code</small>

### The federation

Users can run their own node on their device, custom or supported hardware, or delegate to community-operated nodes.

### Optional cold-storage using Filecoin 

We could store a virtually unlimited amount of data on the Filecoin network.

It could be retreived by any gateways when not found on hot storage.

It's a good way of escaping censored internet and make it available from everywhere.

It should also be cheaper than classic storage providers (google, amazon, mega, etc)

#### IPFS and Filecoin gateways

- [Estuary](https://estuary.tech)
- web3.storage
- https://files.chainsafe.io
- https://storage.chainsafe.io
- https://fleek.co
`
</script>

<template>
  <div class="prose lg:prose-xl">
    <vue3-markdown-it :source="source" html="true" />
  </div>
</template>
