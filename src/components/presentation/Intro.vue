<template>
  <div id="intro" class="pt-10">
    <p>
      Safebook is a social network protocol.<br /><br />
      It's a <b>free software</b> (free as in freedom). Everyone can use it, read the code and
      even modify it.<br />
      You really <b>own your data and account</b>, it's self-hostable and uses decentralized computing
      It's <b>built for human rights</b>: It works in various network conditions, prevent surveillance and is uncensorable <small>(but you have the choice to use an algorithm to filter offensive content, enabled by default)</small>
    </p>
    <H3><A href="/#/signup">Create an account</A></H3>
    <p>
      Safebook uses modern and new cryptographic algorithm and borrow concepts
      from bitcoin and the web3 mouvement.<br />
      Cryptography give us the tools for truly owning our data and accounts.<br />
      It also allow us to deny network surveillance when necessary.
    </p>
    <p class="py-1"></p>
    <p>
      <small
        >* here web3 isn't only about cryptocurrencies, but about cryptographic
        protocols (eg: git and bittorrent)</small
      >
    </p>
    <p>
      <small
        >** spam and unappropriate content is filtered by the user by
        default</small
      >
    </p>
    <H2>Why ?</H2>
    <ul class="list-disc list-inside">
      <li>No third party, server or organisation (Code is law).</li>
      <li>Serverless. No centralized server.</li>
      <li>
        You don't have to trust the network or anyone (Trust is inherited from
        cryptography).
      </li>
      <li>Works with or without internet access.</li>
    </ul>
    <H2>Governed by mathematical rules</H2>
    <p>(WIP)</p>
    <p>
      Instead of relying on a server to manage access control, it's done by
      encryption.
    </p>
    <p>
      For identification, no third-party needed thanks to digital signatures
    </p>
    <p>
      Cryptography helps us have trust in each others, and making informations
      unfalsifiables and uncensorables
    </p>
    <H2>Unbreachables accounts</H2>
    <p class="pb-2">There is no server-side account.</p>
    <p>
      At first there is the passphrase. (Safebook generate a
      cryptographically-strong passphrase for you. Some people may learn it by
      heart.)
    </p>
    <p>
      Everything is generated from there. That means that if you login from a
      different device you're already good to go
    </p>
    <p class="pt-2">We can derive :</p>
    <ul class="list-disc list-inside">
      <li>A signing key for the public profile, if necessary</li>
      <li>Multiples keys for storage (drive/photos)</li>
      <li>Multiples keys for private messaging</li>
      <li>
        A wallet addresses for bitcoin, ethereum, and other cryptocurrencies
      </li>
      <li>
        A password manager master key (wishlist)
        <span class="text-xs"
          >(can support both classic hidden_passwords and deterministic
          passwords (ex: m/58/passwords/website_name))</span
        >
      </li>
      <li>PGP keys for compability with other tools (wishlist)</li>
    </ul>
    <H2>Public profiles : Lightning fast decentralized websites</H2>
    <p>Store your website on the decentralized web using IPFS</p>
    <p>Authentificate your website by signing it with your IPNS private key</p>
    <p>
      Build a static pages at compile time to make your website lightning fast
    </p>
    <p>Step by step :</p>
    <ul class="list-disc list-inside">
      <li>
        The user add keys to his state (username, picture, various info, public
        friends).
      </li>
      <li>The user add messages to his feed.</li>
      <li>
        Using a choosen template, a static webpage representing the user profile
        is generated.
      </li>
      <li>The webpage is sent to IPFS and signed as a IPNS link</li>
    </ul>
    <H2>Private profile (Wishlist)</H2>
    <p>
      (WIP) You can put hidden_data in your profile and give the key only to
      your friends
    </p>
    <H2>Almost invisible messaging (minimal metadata)</H2>
    <p>(WIP)</p>
    <p>See here for metadata leak in the Signal protocol</p>
    <H2>Decentralized IDs</H2>
    <p>Cf blogpost</p>
    <H2>Features and wishlist</H2>
    <ul class="list-disc list-inside">
      <li>
        No server-side stored account using instead a hierachical deterministic
        wallet to derive all the secrets
      </li>
      <li>
        Authentification and permission management is based on electronic
        signatures (like in bitcoin)
      </li>
      <li>
        Secure messaging is based on asymetric cryptography (think of a light
        version of the Signal protocol)
      </li>
      <li>Distributed file storage is base on IPFS and filecoin</li>
      <li>
        Static feed and personal webpage generator hosted on the decentralized
        web to allow a fast-accessed trusted (signed) profile (using
        decentrelized ids and decentralized domains, and hosting the website on
        the peer-to-peer web using IPFS and IPNS
      </li>
      <li>
        Bloom filters are used to avoid giving away rendez-vous points addresses
      </li>
      <li>Quantum resistant</li>
      <li>Ephemeral messages (time if unread, time after read)</li>
      <li>False pin code go to false account or delete all messages</li>
    </ul>
    <H2>Similar projects</H2>
    <H3
      ><A href="https://scuttlebutt.nz">Secure Scuttlebutt</A></H3
    >
    <p>
      A gossip peer-to-peer protocol.<br />
      Feeds are represented as a hashchain of signed messages.
    </p>
    <H3><A href="https://berty.tech">Berty</A></H3>
    <p>
      A truly peer-to-peer, uncensorable and offline first messaging app.<br />
      Based on IPFS
    </p>
    <H3><A href="https://bitmessage.org">Bitmessage</A></H3>
    <p>
      A radical no-metadata messaging app. Every message is a hidden blob that
      you will try to decipher with all your keys, if you succeed, the message
      is for you. (Scaling is a issue)<br />
      TOR-routing of messages is also offered.<br />
    </p>
    <H3><A href="https://lens.xyz">Lens</A></H3>
    <p>A social network on a blockchain (Polygon).</p>
    <p>
      Personnal consideration : I don't know if a pure on-chain approch could
      scale well, every validator would have to validate every post, comments,
      likes, ...
    </p>
    <p>
      <small>
        See :
        <A href="https://lenster.xyz">lenster.xyz</A>
        ,
        <A href="https://mirror.xyz">mirror.xyz</A>
      </small>
    </p>
    <H3><A href="https://ceramic.network/">Ceramic</A></H3>
    <p>
      https://blog.ceramic.network/tiles-a-browser-for-open-source-information/
    </p>
    <H3><A href="https://www.datprotocol.com/">DAT</A></H3>
    <H3><A href="https://retroshare.cc">Retroshare</A></H3>
    <p>Freenet, I2P, Zeronet</p>
    <H2>Other technologies</H2>
    <H3>Zero-Knowledge proofs</H3>
    <p>
      https://twitter.com/LuozhuZhang/status/1530984087061929984?s=20&t=_6d66haeswHBHNn4cEB46A
      <br />
      https://research.protocol.ai/sites/snarks/
    </p>
    <H2>IPFS and Filecoin hubs</H2>
    <ul class="list-disc list-inside">
      <li><A href="https://estuary.tech/">Estuary</A></li>
    </ul>
    <!--
    <H2>About web3</H2>
    <p>https://moxie.org/2022/01/07/web3-first-impressions.html</p>
    -->
  </div>
</template>

<script>
import { H2, H3, A } from '@/components/typography'

export default {
  components: { H2, H3, A },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped></style>
