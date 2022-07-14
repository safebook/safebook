<script setup>
const source = `
## Similar projects

### [Secure Scuttlebutt](https://scuttlebutt.nz)

A gossip peer-to-peer protocol.

Feeds are represented as a hashchain of signed messages.

### [Berty](https://berty.tech)

A truly peer-to-peer, uncensorable and offline first messaging app.<br />
Based on IPFS

### [Bitmessage](https://bitmessage.org)


A radical no-metadata messaging app. Every message is a hidden blob that
you will try to decipher with all your keys, if you succeed, the message
is for you. (Scaling is a issue)

TOR-routing of messages is also offered.

### [Lens](https://lens.xyz)

A social network on a blockchain (Polygon).

Personnal consideration : I don't know if a pure on-chain approch could
scale well, every validator would have to validate every post, comments,
likes, ...

<small>
  See : <A href="https://lenster.xyz">lenster.xyz</A>, <A href="https://mirror.xyz">mirror.xyz</A>
</small>

### [Ceramic](https://ceramic.network)

https://blog.ceramic.network/tiles-a-browser-for-open-source-information/

### [DAT](https://www.datprotocol.com)

### [Retroshare](https://retroshare.cc)

### Freenet, I2P, Zeronet

### [Perfect Dark](https://fr.wikipedia.org/wiki/Perfect_Dark_(P2P))

### Retroshare

## Interesting technologies

### Zero-Knowledge proofs

https://twitter.com/LuozhuZhang/status/1530984087061929984?s=20&t=_6d66haeswHBHNn4cEB46A

https://research.protocol.ai/sites/snarks/
`
</script>

<template>
  <div class="prose lg:prose-xl">
    <vue3-markdown-it :source="source" html="true" />
  </div>
</template>
