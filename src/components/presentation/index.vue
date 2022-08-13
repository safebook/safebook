<template>
  <div class="prose">
    <center class="mt-10"><h1>Subprojects</h1></center>
    <ul class="list-disc list-inside">
      <li><router-link to="intro"><a class="text-blue-500">Presentation</a></router-link></li>
      <li><router-link to="safebook"><a class="text-blue-500">Safebook Profile (Main app)</a></router-link></li>
      <li><router-link to="messenger"><a class="text-blue-500">Safebook messenger</a></router-link></li>
      <li><router-link to="drive"><a class="text-blue-500">Safebook Drive</a></router-link></li>
      <li>
        <small
          >Safebook Search: Yacy + advesarial caching of every search from the search provide
          + indexing facility + default to offline search, and with an additionnal YaCy backend</small
        >
      </li>
      <li><small>Safebook Password Manager. A state of the art determinist and non-deterministic password manager. <b>Best might be just generating the seed for an open source pw manager</b></small></li>
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
    </ul>
  </div>
</template>

<script></script>
