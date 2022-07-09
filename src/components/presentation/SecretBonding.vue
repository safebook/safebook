<template>
  <div>
    <H2>Summary</H2>
    <p>We want to be able to "poke" or "like" a person in a serverless setup without making the information public.</p>
    <H2>Protocol</H2>
    <p>Step 1: Compute the ECDH bonding with the person that you want to poke or like</p>
    <p>Step 2: Compute the beacon. <code>Beacon = Hash(ECDH shared key)</code></p>
    <p>Step 3: The person B can now see if it is liked or poked by the person A by computing the same beacon and checking if it exist in the network DHT.</p>
  </div>
</template>

<script>
import { H2 } from '@/components/typography/index.js'
export default {
  components: { H2 }
}
</script>
