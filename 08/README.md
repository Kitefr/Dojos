## Hamming

L'objectif de cet exercice est de compter le nombre de différences entre 2 chaines de caractères passées en paramètre à notre fonction. Cette différence se nomme la distance de Hamming.

Exemple :

* Comparaison entre '1' et '1' retourne 0
* Comparaison entre '1' et '0' retourne 1
* Comparaison entre '10' et '0' retourne -1 (impossible car la longueur n'est pas identique)
* Comparaison entre '101' et '010' retourne 3
* Comparaison entre '10 1' et ' 010' retourne 3 aussi car les espaces ne compte pas.

Bonus: Si une des deux chaines de caractères n'est pas une chaine de caractère, alors nous utiliserons un objet de la classe Error(JS) , puis avec try/catch afin de mettre un message d'erreur, le fichier concerné et la ligne concernée.

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Error
