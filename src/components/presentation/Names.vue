<template>
  <div class="prose lg:prose-xl">
    <VueMarkdown>
      {{ content }}
    </VueMarkdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

const content = `
We will see what is the problem with name resolution, in the context of websites (which rely on DNS) ans usernames (which rely on a third-party)

# DNS

The mechanism that translate a web address (eg: wikipedia.org) to an Internet (IP) Address
is the DNS (Domain Name System).

The DNS servers are operated by [central organizations](https://en.wikipedia.org/wiki/Domain_name_registry). (Everyone can use a (intermediary)? to buy a domain)
In most case, every router (internet box, etc) can potentially alternate the data

This is DNS: Just send a bottle with a name and wait for an address.
It's not secure at all, and require everyone to be honest.

\\*(Things got a little better with the DNSSEC security extenstion but still has flaws.)

I will advocation that blockchains like namecoin(.bit) are a better alternative

# The problem with IP address

Just send a bottle with an address and wait for the response.
Everyone in the middle can temper with the communication

(Things get better with HTTPS but still rely on many third parties (Certificate Authority))

# The problem with Web 2.0 accounts

You rely on a third party for your identity, what a paradox.

# The distributed web solution

The name of a file is his hash (see IPFS for content addressing)

The name of a user is his public key, or something derived from his public key

# Decentralized name system

Some decentralized name system relies on blockchains
- [ENS] (.eth)
- [Namecoin] (.bit)
- [Tezos Domains] (.tez)
- [Unstoppable domains] (.x, .crypto, ...)

[ENS]: https://ens.domains
[Namecoin]: https://www.namecoin.org
[Tezos Domains]: https://tezos.domains
[Unstoppable domains]: https://unstoppabledomains.com
`

export default {
  components: { VueMarkdown },
  data () {
    return {
      content
    }
  }
}
</script>

<style scoped>
a {
  color: blue !important;
  text-decoration: underline;
}
</style>
