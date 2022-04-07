En réponse aux [fuites de données et de métadata dans Signal][1], Safebook Whisper prend plusieurs mesures.

# Ne pas trahir le social graph

**Note importante: Une bonne partie de ce qui est en dessous est surement irrélévent du fait qu'on envoi pas de message de type
{ source, dest, message } mais qu'on utilise toujours les groupe de cette facon { group, message }**

Pourquoi pas
{
  group,
  hidden_source,
  hidden_message
}

## Addresses uniques par connection ou par message

- Par connection
Lorsqu'on donne un addresse à quelqu'un (ou qu'on envoi un message à une nouvelle personne), on génére toujours une nouvelle addresse.

(On peut utiliser f(me, you))

- Par message
Chaque message a une nouvelle addresse, rendant 

## Comment écouter seulement les addresses qui nous intéréssent sans trahir qui nous sommes et avec qui nous parlons

On peut utiliser les blooms filters




[1]: fr/signal_leak.md
