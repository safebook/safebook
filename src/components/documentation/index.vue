<script>
export default {}
</script>

<template>
  <div>
    <h1>Data structure</h1>
    <p>/objects store every objects (events)</p>
    <p>/events/index give the chain of events</p>

    <p>/state/index give all $key/$value pairs</p>

    <p>/messages/index give the chain of messages (events of type message)</p>
    <p>(may implement /messages/recent for faster access, possibly with full messages content)</p>

    <p>/files/index for files</p>

    <p>Everything is stored as a hash chain of events</p>
    <p>Message event {previous: message: }</p>
    <p>State event</p>

    <h1>Encodings</h1>

    <table>
      <th>
        <td>Encoding</td>
        <td>Compaction</td>
        <td>Example</td>
        <td>Human readibility</td>
      </th>
      <tr>
        <td>Base64</td>
        <td>H+/la1is0as0</td>
        <td>Good</td>
        <td>Good</td>
      </tr>
      <tr>
        <td>Base58</td>
        <td>S9013elJLKnfwLldks</td>
        <td>Example</td>
        <td>Good</td>
        <td>Better</td>
      </tr>
      <tr>
        <td>Mnemonic</td>
        <td>hello social font</td>
      </tr>
    </table>
  </div>
</template>
