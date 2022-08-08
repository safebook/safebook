<template>
  <div class="prose">
    <center class="mt-10"><h1>Subprojects</h1></center>
    <ul class="list-disc list-inside">
      <li><router-link to="intro"><a class="text-blue-500">Presentation</a></router-link></li>
      <li><router-link to="safebook"><a class="text-blue-500">Safebook Profile (Main app)</a></router-link></li>
      <li><router-link to="messenger"><a class="text-blue-500">Safebook messenger</a></router-link></li>
      <li><router-link to="drive"><a class="text-blue-500">Safebook Drive</a></router-link></li>
      <li><router-link to="names"><a class="text-blue-500">Safebook Names</a></router-link></li>
      <li>
        <small
          >Safebook Search (based on aggressive adveserial caching of every search from the search provider, and p2p sharing of those results, default
          to offline search, and with an additionnal YaCy backend</small
        >
      </li>
      <li><small>Safebook Password Manager. A state of the art determinist and non-deterministic password manager. <b>Best might be just generating the seed for an open source pw manager</b></small></li>
      <li>
        <router-link to="similar_projects"><a class="text-blue-500">Related projects</a></router-link>
      </li>
    </ul>
    <h1><center>Cryptographic protocols</center></h1>
    <ul class="list-disc list-inside">
      <li>
        <router-link to="metadata_in_signal"><a class="text-blue-500">The metadata problem</a></router-link>
      </li>
      <li>
        <router-link to="secret_bonding"
          ><a class="text-blue-500">Secret Bonding</a></router-link
        >
      </li>
      <li>
        <router-link to="secret_rendez_vous"
          ><a class="text-blue-500">Secret Rendez-vous</a></router-link
        >
      </li>
      <li>
        How to discover your friends on the network (using phone numbers for
        exemples) without giving away your friendlist.<br />
        Part1: Associate your phone number, email address or other
        identification mean with a public key. This could be done using
        web-of-trust. (This is a topic on its own)<br />
        Part2: Compute a kind of "secret rendez-vous point" (H(K_a^k_b) ==
        H(K_b^k_a)) from your public key (eg: associated with your phone number)
        with all your friends "phone-numbers" public key and publish it<br />
        Part3: Finding a published token linking our phone number to someone's
        else means that our this is indeed our friend's public key<br />
        [It is true indeed that after Part1, we don't need Part2 and Part3
        because we already know our friends public keys]
      </li>
    </ul>
    <h3>Misc</h3>
    <ul class="list-disc list-inside">
      <li>
        <small>
          Hash payement. Where customers pays but the company makes no money.
          Could be a PoW difficulty target for different hash difficulty
          (cpu,gpu,memory,proof of space-time?) or even useful work like folding
          proteins or finding primes. The organisator or DOA sets the difficulty
          target. Could be used for - Requesting ressource - Sending message (ex:
          Bitmessage) - DDNS name registration - Tokenless blockchain
        </small>
      </li>
      <li>
        <small>
          A company or system for quickly building a web-of-trust. for exemple
          associating a pubkey to a phone number. You could get tokens or money to
          verify someone's else number
        </small>
        <p>Ex: WoT for associating a pubkey to a phone number.</p>
      </li>
    </ul>
  </div>
</template>

<script></script>
