Un filtre de bloom est une structure de donnée probabilistique permettant de savoir rapidement si un élément appartient à l'ensemble.
Un risque de faux positifs existe, mais pas de faux négatifs.

Ils sont utilisés pour savoir rapidement si un élément apparitent à un ensemble (ou plus exactement si il n'apparitient pas à l'ensemble, à cause du risque de faux négatifs).

Mais un autre usage peut-être l'anonymité de l'utilsateurs. En demandant à un tiers (peer ou server) si il possède des messages appartenant à ce filtre de bloom, on ne dévoile pas les messages que l'on cherche. (It can be used for exemple to search group ids)

Query: 0b0101001011

Answer: { total: 7, results: [{ msg }, { msg_2 }, ...]}

Si le filtre n'est pas assez précis (on a trop de réponse), on peut passer sur un filtre plus précis, mais cela fait perdre en anonymité. \*

\* On peut imaginer une attaque ou le pair renvoi toujours un grand nombre de faux message pour faire baisser le niveau de compression du filtre de bloom