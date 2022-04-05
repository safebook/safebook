<template>
  <div id="intro">
    <p>
      A social network where you own your data. You can even host it yourself.<br />
      There is no third-parties, no server, just users<br />
      In fact, we replaced the server by cryptographic rules. Reading access is managed by encryption. Authentification and trust is done through digital signature.<br />
      Everything is deployed as peer-to-peer network over the internet. But you can choose not to join and use other means (local network, bluetooth, ...).<br />
      Cryptography helps us have trust in each others, and making informations unfalsifiables and uncensorables (yes we will build a community-based filter for unappropriate content)<br />
      You can host your own data and encrypt it only to those who can access it<br />
    </p>
    <h2 class="my-4">Technologies</h2>
    <ul class="list-disc list-inside">
      <li>No server-side stored account using instead a hierachical deterministic wallet to derive all the secrets</li>
      <li>Authentification and permission management is based on electronic signatures (like in bitcoin)</li>
      <li>Secure messaging is based on asymetric cryptography (think of a light version of the Signal protocol)</li>
      <li>Distributed file storage is base on IPFS and filecoin</li>
      <li>Static feed and personal webpage generator hosted on the decentralized web to allow a fast-accessed trusted (signed) profile (using decentrelized ids and decentralized domains, and hosting the website on the peer-to-peer web using IPFS and IPNS</li>
      <li>Bloom filters are used to avoid giving away rendez-vous points addresses</li>
    </ul>
    <h2 class="my-4">Similar projects</h2>
    <h3 class="my-2"><a href>Secure Scuttlebutt</a></h3>
    <p>
    A gossip peer-to-peer protocol.<br />
    Feeds are represented as a hashchain, just like in safebook.
    </p>
    <h3 class="my-2"><a href>Berty</a></h3>
    <p>
    A truly peer-to-peer, uncensorable and offline first messaging app.<br />
    Like safebook it's based on IPFS
    </p>
    <h3 class="my-2"><a href>Lens</a></h3>
    <p></p>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
</style>
