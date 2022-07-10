<script setup>
const source = `
## Safebook Drive

An experiment toward a **fully decentralized cloud engine**, based on Filecoin.

Cost should be **cheaper** than google drive, AWS or mega.

It should **work everywhere**, even with poor connectivity or on a censored internet.

There is no know mean of preventing pirate content to be stored. Thus legally it's a grey area.

<small>The Safebook Drive software is Peer-to-Peer but cannot yet run on a phone or on the browser, as it require a full Lotus (Filecoin client)</small>

### See also

- [Estuary](https://estuary.tech)
- web3.storage
- https://files.chainsafe.io
- https://storage.chainsafe.io
- https://fleek.co
`;
</script>

<template>
  <div class="prose lg:prose-xl">
    <vue3-markdown-it :source="source" html="true" />
  </div>
</template>
