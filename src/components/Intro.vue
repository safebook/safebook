<template>
  <div id="intro" class="pt-10">
    <p class="py-3">
      <i>Own your data.</i>
    </p>
    <Header3><Link href="/signup">Create an account</Link></Header3>
    <Header2>What is safebook ?</Header2>
    <p>Safebook is a free and open-source peer-to-peer social network, built from recent innovation in cryptography.</p>
    <p>It is part of the web3 movement<small>*</small>, where users have full ownership and control over their data.</p>
    <p>It is decentralised, uncensorable<small>**</small>, naturally multi-devices and can be self-hosted</p>
    <p class="py-1"></p>
    <p><small>* here web3 isn't only about cryptocurrencies, but about cryptographic protocols (eg: git and bittorrent)</small></p>
    <p><small>** spam and unappropriate content is filtered by the user by default</small></p>
    <Header2>Why ?</Header2>
    <ul class="list-disc list-inside">
      <li>No third party, server or organisation (Code is law).</li>
      <li>Serverless. No centralized server.</li>
      <li>You don't have to trust the network or anyone (Trust is inherited from cryptography).</li>
      <li>Works with or without internet access.</li>
    </ul>
    <Header2>Governed by mathematical rules</Header2>
    <p>(WIP)
    <p>Instead of relying on a server to manage access control, it's done by encryption.</p>
    <p>For identification, no third-party needed thanks to digital signatures</p>
    <p>Cryptography helps us have trust in each others, and making informations unfalsifiables and uncensorables</p>
    <Header2>Unbreachables accounts</Header2>
    <p class="pb-2">There is no server-side account.</p>
    <p>At first there is the passphrase. (Safebook generate a cryptographically-strong passphrase for you. Some people may learn it by heart.)
    <p>Everything is generated from there. That means that if you login from a different device you're already good to go</p>
    <p class="pt-2">We can derive :</p>
    <ul class="list-disc list-inside">
      <li>A signing key for the public profile, if necessary</li>
      <li>Multiples keys for storage (drive/photos)</li>
      <li>Multiples keys for private messaging</li>
      <li>A wallet addresses for bitcoin, ethereum, and other cryptocurrencies</li>
      <li>A password manager master key (wishlist) <span class="text-xs">(can support both classic hidden_passwords and deterministic passwords (ex: m/58/passwords/website_name))</span></li>
      <li>PGP keys for compability with other tools (wishlist)</li>
    </ul>
    <Header2>Public profiles : Lightning fast decentralized websites</Header2>
    <p>Store your website on the decentralized web using IPFS</p>
    <p>Authentificate your website by signing it with your IPNS private key</p>
    <p>Build a static pages at compile time to make your website lightning fast</p>
    <p>Step by step :</p>
    <ul class="list-disc list-inside">
      <li>The user add keys to his state (username, picture, various info, public friends).</li>
      <li>The user add messages to his feed.</li>
      <li>Using a choosen template, a static webpage representing the user profile is generated.</li>
      <li>The webpage is sent to IPFS and signed as a IPNS link</li>
    </ul>
    <Header2>Private profile (Wishlist)</Header2>
    <p>(WIP) You can put hidden_data in your profile and give the key only to your friends</p>
    <Header2>Almost invisible messaging (minimal metadata)</Header2>
    <p>(WIP)</p>
    <p>See here for metadata leak in the Signal protocol</p>
    <Header2>Decentralized IDs</Header2>
    <p>Cf blogpost</p>
    <Header2>Features and wishlist</Header2>
    <ul class="list-disc list-inside">
      <li>No server-side stored account using instead a hierachical deterministic wallet to derive all the secrets</li>
      <li>Authentification and permission management is based on electronic signatures (like in bitcoin)</li>
      <li>Secure messaging is based on asymetric cryptography (think of a light version of the Signal protocol)</li>
      <li>Distributed file storage is base on IPFS and filecoin</li>
      <li>Static feed and personal webpage generator hosted on the decentralized web to allow a fast-accessed trusted (signed) profile (using decentrelized ids and decentralized domains, and hosting the website on the peer-to-peer web using IPFS and IPNS</li>
      <li>Bloom filters are used to avoid giving away rendez-vous points addresses</li>
      <li>Quantum resistant</li>
      <li>Ephemeral messages (time if unread, time after read)</li>
      <li>False pin code go to false account or delete all messages</li>
    </ul>
    <Header2>Similar projects</Header2>
    <Header3><Link href="https://scuttlebutt.nz">Secure Scuttlebutt</Link></Header3>
    <p>
    A gossip peer-to-peer protocol.<br />
    Feeds are represented as a hashchain of signed messages.
    </p>
    <Header3><Link href="https://berty.tech">Berty</Link></Header3>
    <p>
    A truly peer-to-peer, uncensorable and offline first messaging app.<br />
    Based on IPFS
    </p>
    <Header3><Link href="https://bitmessage.org">Bitmessage</Link></Header3>
    <p>
      A radical no-metadata messaging app. Every message is a hidden blob that you will try to decipher with all your keys, if you succeed, the message is for you. (Scaling is a issue)<br />
      TOR-routing of messages is also offered.<br />
    </p>
    <Header3><Link href="https://lens.xyz">Lens</Link></Header3>
    <p>A social network on a blockchain (Polygon).</p>
    <p>Personnal consideration : I don't know if a pure on-chain approch could scale well, every validator would have to validate every post, comments, likes, ...</p>
    <p><small>
      See :
      <Link href="https://lenster.xyz">lenster.xyz</Link>
      ,
      <Link href="https://mirror.xyz">mirror.xyz</Link>
    </small></p>
    <Header3><Link href="https://ceramic.network/">Ceramic</Link></Header3>
    <p>https://blog.ceramic.network/tiles-a-browser-for-open-source-information/</p>
    <Header3><Link href="https://www.datprotocol.com/">DAT</Link></Header3>
    <Header2>Other technologies</Header2>
    <Header3>Zero-Knowledge proofs</Header3>
    <p>
      https://twitter.com/LuozhuZhang/status/1530984087061929984?s=20&t=_6d66haeswHBHNn4cEB46A
      <br />
      https://research.protocol.ai/sites/snarks/
    </p>
    <Header2>IPFS and Filecoin hubs</Header2>
    <ul class="list-disc list-inside">
      <li><Link href="https://estuary.tech/">Estuary</Link></li>
    </ul>
    <Header2>About web3</Header2>
    <p>https://moxie.org/2022/01/07/web3-first-impressions.html</p>
  </div>
</template>

<script>
import Vue from 'vue'

const Header2 = Vue.component('Header2', {
  template: '<h2 class="py-3"><slot /></h2>'
})

const Header3 = Vue.component('Header3', {
  template: '<h3 class="py-2"><slot /></h3>'
})

const Link = Vue.component('Link', {
  props: ['href'],
  template: '<a class="text-blue-500" :href="href"><slot /></a>'
})

export default {
  components: { Header2, Header3, Link },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
</style>
