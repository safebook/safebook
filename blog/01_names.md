# Context

The mechanism that translate a web address (eg: wikipedia.org) to an Internet (IP) Address
is the DNS (Domain Name System).

We will see what's wrong with it and what are the alternatives

# The problem with DNS (Domain Name System)

This is DNS: Just send a bottle with a name and wait for an address.
It's not secure at all, and require everyone to be honest.

(Things got a little better with the DNSSEC security extenstion but still has flaws.)

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
