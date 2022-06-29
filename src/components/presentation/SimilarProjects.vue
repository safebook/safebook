<template>
  <div>
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
      <li>Web3.storage</li>
      <li>https://files.chainsafe.io and https://storage.chainsafe.io</li>
      <li>https://fleek.co</li>
    </ul>
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