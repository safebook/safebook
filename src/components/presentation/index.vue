<template>
  <div>
    <center class="mt-10"><h1>Table of contents</h1></center>
    <ul class="list-disc list-inside">
      <li><router-link to="intro"><a class="text-blue-500">Presentation</a></router-link></li>
      <li><router-link to="safebook"><a class="text-blue-500">Safebook Pages</a></router-link></li>
      <li>Safebook Drive</li>
      <li>Safebook Messenger</li>
      <li>Safebook Search</li>
      <li><router-link to="names"><a class="text-blue-500">Safebook Names</a></router-link></li>
      <li><router-link to="similar_projects"><a class="text-blue-500">Similar and comparables projects</a></router-link></li>
    </ul>
    <h1><center>Cryptographic protocols</center></h1>
    <ul class="list-disc list-inside">
      <li><router-link to="secret_bonding"><a class="text-blue-500">Secret Bonding</a></router-link></li>
      <li><router-link to="secret_rendez_vous"><a class="text-blue-500">Secret Rendez-vous</a></router-link></li>
      <li>(Move to previous link)<br />
        To prevent RDV reuse we can derive n RDVs from one (kept secret) RDV seed using H(RDV + "0"), H(RDV + "1"), ...<br />
        It could also be powerful to use BIP32's CKDpub to compute child public keys from the parent public key withou access to private keys, for a semi-trusted setup
      </li>
      <li>
        Rendez-voud point pre-computation advantages for a social dark web.<br />
        Solution for the metadata problem on a messaging app<br />
        Let's say there is 10B users and we can precompute 30M per second. less that 1h and less than 10GB are necessary to precompute all associations.<br />
        Given that we have a secret rendez-vous point with every users, we can listen to everyone, but we shouldn't advertise what are the secret rendez-vous point that we listen, because it will obviously give away that we are one of the parcticipant (sender or receiver).<br />
        While it should be possible for the network to store every messages for a sufficient period of time using a DHT,<br />
        It would be impossible for a single user to process all messages. That is where bloom filters takes place.
      </li>
      <li>
        How to discover your friends on the network (using phone numbers for exemples) without giving away your friendlist.<br />
        Part1: Associate your phone number, email address or other identification mean with a public key. This could be done using web-of-trust. (This is a topic on its own)<br />
        Part2: Compute a kind of "secret rendez-vous point" (H(K_a^k_b) == H(K_b^k_a)) from your public key (eg: associated with your phone number) with all your friends "phone-numbers" public key and publish it<br />
        Part3: Finding a published token linking our phone number to someone's else means that our this is indeed our friend's public key<br />
        [It is true indeed that after Part1, we don't need Part2 and Part3 because we already know our friends public keys]
      </li>
    </ul>
    <h3>Misc</h3>
    <ul class="list-disc list-inside">
      <li>
        Hash payement. Where customers pays but the company makes no money. Could be a PoW difficulty target for different hash difficulty (cpu,gpu,memory,proof of space-time?) or even useful work like folding proteins or finding primes. The organisator or DOA sets the difficulty target. Could be used for - Requesting ressource - Sending message (ex: Bitmessage) - DDNS name registration - Tokenless blockchain
      </li>
      <li>A company or system for quickly building a web-of-trust. for exemple associating a pubkey to a phone number. You could get tokens or money to verify someone's else number</li>
    </ul>
  </div>
</template>

<script>
</script>
