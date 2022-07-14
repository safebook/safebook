<script setup>
const source = `
## Summary

We want to be able to "poke" or "like" a person in a serverless setup
without making the information public.

## Protocol

Step 1: Compute the ECDH bonding with the person that you want to poke or
like

Step 2: Compute the beacon. <code>Beacon = Hash(ECDH shared key)</code>

Step 3: The person B can now see if it is liked or poked by the person A
by computing the same beacon and checking if it exist in the network DHT.
`
</script>

<template>
  <div class="prose lg:prose-xl">
    <vue3-markdown-it :source="source" html="true" />
  </div>
</template>
