# BFIPRF

## Anonimity set

An anominity set is a set of N elements (ids) generated from a seed.
By an attacker (someone that don't know the seed), ids are indistinguishable from random.
By an associate (someone that know the seed), ids all belongs to the same family (at least because he can generate the set himself)

Proposition:
Element1 = HASH(seed)
Element2 = HASH(HASH(seed)) [WRONG]

## Anonimity set preserving hash functions

We are looking for a hash function giving the same result for all ids generated in the same anomimity set.

Proposition:
MAX(e, H(e), H(H(e)), ..., H^n(e))