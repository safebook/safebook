<script>
export default {};
</script>

<template lang="pug">
  h1 Data structure
  p /objects store every objects (events)

  p /events/index give the chain of events

  p /state/index give all $key/$value pairs

  p /messages/index give the chain of messages (events of type message)
  p (may implement /messages/recent for faster access, possibly with full messages content)

  p /files/index for files

  p Everything is stored as a hash chain of events
  p Message event {previous: message: }
  p State event

  h1 Encodings
  table
    th
      td Encoding
      td Compaction
      td Example
      td Human readibility
    tr
      td Base64
      td H+/la1is0as0
      td Good
      td Good
    tr
      td Base58
      td S9013elJLKnfwLldks
      td Example
      td Good
      td Better
    tr
      td Mnemonic
      td hello social font 

</template>
