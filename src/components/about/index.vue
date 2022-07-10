<template>
  <vue3-markdown-it :source="source" />
</template>

<script>
const source = `
# About

# Similar tools

- Berty
- Secure Scuttlebutt
- Status
- Signal

## History

Safebook is a personal project that started as a browser plugin encrypting
facebook messages before they are sent and decrypting safebook messages when
found

Because facebook is listening to every keystroke (for suggestions, etc) it is
not possible to hide messages this way so it has been abandoned in profit of
a separate website.

It was abandonned for 5+ years before this new attemps.
New ideas were coined like base58 encoding for address
with SB prefix vanity addresses, shadow addresses, signing for publication,
and now aim to be server independant to allow different server
implementations (and hopefully a decentralised one)

## Other tools

### PGP/GPG

PGP is the reference.
It's quite old but it provides state-of-the-art cryptographic. difficult to use

### Minilock

### Bitmessage

## Crypto libraries

sjcl
nacl
celle de l'auteur de real world crypto
openssl
...
`;

export default {
  name: "About",
  data() {
    return {
      source,
    };
  },
};
</script>

<style scoped></style>
