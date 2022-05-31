<template>
  <div>
    <Header2>Summary</Header2>
    <p>We want to be able to "poke" or "like" a person in a serverless setup without making the information public.</p>
    <Header2>Protocol</Header2>
    <p>Step 1: Compute the ECDH bonding with the person that you want to poke or like</p>
    <p>Step 2: Compute the beacon. <code>Beacon = Hash(ECDH shared key)</code></p>
    <p>Step 3: The person B can now see if it is liked or poked by the person A by computing the same beacon and checking if it exist in the network DHT.</p>
  </div>
</template>

<script>
import { Header2 } from "@/components/typography"
export default {
  components: { Header2 }
}
</script>
